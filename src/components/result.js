import React from 'react';
import './CSS/result.css'
import sha256 from 'js-sha256'
import data from './data/intro.json'
import html2canvas from 'html2canvas'

var transName = data.transName;

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        };
        this.handleData = this.handleData.bind(this);
    }

    handleData(name) {
        if (!(name in this.state.data)) return;
        let res = [<div className='resultTitle' id='title'>{transName[name]}</div>];
        let data = this.state.data[name];
        for (let i in data) res.push(
            <div className='resultItems'
                id={sha256(i)}>
                <p>{i}</p>
                <p className='resultItemsNum'>{data[i]}</p>
            </div>);
        return res;
    }

    handleSrnShot() {
        let des = document.getElementById('result');
        let css = window.getComputedStyle(des, null);
        let f = (name) => parseFloat(css[name].substring(0, css['height'].length - 2));
        html2canvas(des, {
            useCORS: true,
            width: f('width') + 50,
            height: f('height'),
            windowWidth: des.scrollWidth,
            windowHeight: des.scrollHeight,
            x: 0,
        }).then(canvas => {
            const base64Img = canvas.toDataURL('image/png', 1);
            var a = document.createElement('a');
            a.download = '卡';
            a.href = base64Img;
            a.click();
        });
    }

    render() {
        let basic = { ...this.state.data['Basic'] };
        return (<div>

            <div className='title'>结果</div>
            <button className='button' onClick={this.handleSrnShot.bind(this)} >下载</button>
            <div id='result'>
                <div className='resultBasic'>
                    <div className='resultBasicTable'>
                        <div className='resultBasicItems'>
                            姓名：<p>{basic.name}</p>
                        </div>
                        <div className='resultBasicItems'>
                            性格：<p>{basic.character}</p>
                        </div>
                        <div className='resultBasicItems'>
                            主武器：<p>{basic.weapon}</p>
                        </div>
                    </div>
                    <img src={basic.image} />
                </div>
                <div className='resultTable'>
                    {this.handleData('Property')}
                    {this.handleData('Academic')}
                    {this.handleData('Normal')}
                </div>
                <div className='backgroundStory'>
                    <h2>背景故事</h2>
                    <article>
                        {basic.background}
                    </article>
                </div>
            </div>
        </div>);
    }
}

export default Result;