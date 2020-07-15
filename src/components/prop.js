import React from 'react';
import sha256 from 'js-sha256'
import ReactTooltip from 'react-tooltip'
import './CSS/prop.css'
import data from './data/prompt.json'
var temp = {};
var transName = {
    Academic: '学术能力',
    Social: '社交能力',
    Normal: '普通能力'
}

class PropItem extends React.Component {
    static tipStyle = {
        "data-place": "right",
        "data-type": "info",
        "data-background-color":"white",
        "data-text-color":"rgb(0, 0, 0, 0.65)",
        "data-class":"tips"
    };

    constructor(props) {
        super(props);
        this.state = {
            num: props.value,
            isPrompt: false,
        }
        this.name = props.name;
        this.class = props.class;
        this.intro = data[transName[this.class]][this.name];
        this.total = props.callback.total;   //总点数回调
        this.partial = props.callback.partial;   //类别统计回调
        this.partial(this.name, this.state.num);
    }

    handlePrompt() {
        this.setState({ isPrompt: true })
    }

    changeNum(e) {
        //由上层函数判断操作合法性
        //如果操作合法，则改变当前对象的值
        let n = this.state.num + this.total(e, this.state.num);
        this.partial(this.name, n);
        this.setState({ num: n });
    }

    render() {
        return <tr>
            <td className='propItem'>
                <ReactTooltip/>
                <div className='propName' data-tip={this.intro} {...PropItem.tipStyle}>
                    {this.name}
                </div>
                <div className='propCtrl'>
                    <button className='propBtn propBtn-left' value='sub' onClick={this.changeNum.bind(this)} > - </button>
                    <div className='propNum'>
                        {this.state.num}
                    </div>
                    <button className='propBtn propBtn-right' value='add' onClick={this.changeNum.bind(this)} > + </button>
                </div>
            </td>
        </tr>;
    }
}

class PropTable extends React.Component {
    constructor(props) {
        super(props);
        this.items = props.items;
        this.submit = props.callback.submit;
        this.name = props.name;

        this.callback = {
            total: props.callback.cost,
            partial: this.handleCost.bind(this)
        }

        if (!(this.name in temp)) temp[this.name] = {};
        this.state = temp[this.name];
        this.res = this.items.map((i) => {
            return <PropItem class={this.name} name={i} value={i in this.state ? this.state[i] : 0}
                key={sha256(i)} callback={this.callback} />;
        })
    }

    componentWillUnmount() {
        for (let i in this.state) temp[this.name][i] = this.state[i];
        this.submit(this.state, this.name);
    }

    handleCost(name, num) {
        this.setState({ [name]: num });
        this.submit(this.state, this.name);
    }

    render() {
        return (
            <div className='propArea'>
                <div className='title'>{transName[this.name]}</div>
                <table>
                    <tbody>
                        {this.res}
                    </tbody>
                </table>
            </div>
        );
    }
}

function Academic(props) {
    var items = ['会计', '人类学', '考古学', '建筑学', '艺术史', '生物学', '密码学', '地质学', '克苏鲁神话', '历史', '语言', '法律', '文献查阅', '医学', '神秘学', '物理学', '神学'];

    return <PropTable items={items} callback={props.callback} name='Academic' />;
}
function Social(props) {
    var items = ['察言观色', '议价', '官僚', '警方交谈', '信誉', '奉承', '审讯', '威胁', '口述采访', '安抚', '底层社会'];

    return <PropTable items={items} callback={props.callback} name='Social' />;
}

function Normal(props) {
    var items = ['运动', '藏匿', '伪装', '驾驶', '电器维修', '爆破', '偷窃', '枪械', '急救', '逃脱', '健康', '催眠', '机械维修', '导航', '物品整备', '精神分析', '骑术', '心智', '坚毅', '搏击', '警觉', '追踪', '潜行', '近战武器'];

    return <PropTable items={items} callback={props.callback} name='Normal' />;
}
export {
    Academic,
    Social,
    Normal,
};