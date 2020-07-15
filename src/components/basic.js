import React, { createRef } from 'react'
import sha256 from 'js-sha256'
import './CSS/basic.css'
import Popover from 'react-popover'

class Basic extends React.Component {
    static temp = {
        name: '',
        occupation: '',
        character: '',
        background: '',
        image: ' ',
    };

    constructor(props) {
        super(props);
        this.state = Basic.temp;
        this.submit = props.submit;
        this.fileInput = createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }

    handleSubmit(e) {
        //自适应高度
        if (e.target.type == 'textarea') {
            e.target.style['height'] = 'auto';
            e.target.style['height'] = e.target.scrollHeight + 'px';
        }
        this.setState({ [e.target.name]: e.target.value });
    }

    handleImage(e) {
        let src = e.target.files[0] ? window.URL.createObjectURL(e.target.files[0]) : ' ';
        this.fileInput.current.src = src;
        this.setState({ image: src });
    }

    componentWillUnmount() {
        for (let i in this.state)
            Basic.temp[i] = this.state[i];
        this.submit(this.state, 'Basic');
        //上传basic数据
    }

    geneInput(title, name, sta = 0) {
        let temp;
        if (sta === 0) temp = <input className='input' name={name} value={this.state[name]} onChange={this.handleSubmit} />;
        if (sta === 1) temp = <textarea className='input inputTextarea' name={name} value={this.state[name]} onChange={this.handleSubmit} />;
        return (<div className='inputField' key={sha256(name)}>
            <div className='itemName'>{title}：</div>
            {temp}
        </div>);
    }

    render() {
        return (
            <div className='basicInput'>
                <div className='title'>基本信息</div>
                {[this.geneInput('调查员姓名', 'name'),
                this.geneInput('职业', 'occupation'),
                this.geneInput('性格特征', 'character'),
                this.geneInput('背景故事', 'background', 1)]}

                <div className='inputField'>
                    <div className='itemName'>头像：</div>
                    <div className='input imgInput' >
                        <p>点击此处上传图片</p>
                        <input
                            type='file'
                            accept='image/*'
                            id='rawImgInput' name='image'
                            onChange={this.handleImage}
                        />
                    </div>

                    <img id='preview' ref={this.fileInput}></img>
                </div>
            </div>
        );
    }
}

export default Basic;