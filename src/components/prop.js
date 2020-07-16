import React from 'react';
import sha256 from 'js-sha256'
import ReactTooltip from 'react-tooltip'
import './CSS/prop.css'
import data from './data/intro.json'
var temp = {};
var transName = data.transName;

class PropItem extends React.Component {
    static tipStyle = {
        "data-place": "right",
        "data-type": "info",
        "data-background-color": "white",
        "data-text-color": "rgb(0, 0, 0, 0.65)",
        "data-class": "tips"
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
                <ReactTooltip />
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
        this.submit = props.callback.submit;
        this.name = props.name;
        this.items = Object.keys(data[transName[this.name]]);

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
export default PropTable;