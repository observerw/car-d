import React from 'react';
import './CSS/result.css'
import sha256 from 'js-sha256'
import html2canvas from 'html2canvas'

class Result extends React.Component {
    static transName = {
        Academic: '学术能力',
        Social: '社交能力',
        Normal: '普通能力'
    }
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        };
        this.handleData = this.handleData.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({ data: props.data });
    }

    handleData(name) {
        if (!(name in this.state.data)) return;
        let res = [<div className='resultTitle'>{Result.transName[name]}</div>];
        let data = this.state.data[name];
        for (let i in data) res.push(
            <div className='resultItems'
                id={sha256(i)}>
                <p>{i}</p>
                <p className='resultItemsNum'>{data[i]}</p>
            </div>);
        return res;
    }

    render() {
        let basic = { ...this.state.data['Basic'] };
        return (<div className='result'>
            <div className='title'>结果</div>
            <div className='resultBasic'>
                <div className='resultBasicTable'>
                    <div className='resultBasicItems'>
                        姓名：<p>{basic.name}</p>
                    </div>
                    <div className='resultBasicItems'>
                        职业：<p>{basic.occupation}</p>
                    </div>
                    <div className='resultBasicItems'>
                        性格：<p>{basic.character}</p>
                    </div>
                </div>
                <img src={basic.image} />
            </div>
            <div className='resultTable'>
                {this.handleData('Academic')}
                {this.handleData('Social')}
                {this.handleData('Normal')}
            </div>
            <div className='backgroundStory'>
                <h2>背景故事</h2>
                <article>
                {basic.background}
                </article>
            </div>
        </div>);
    }
}

export default Result;