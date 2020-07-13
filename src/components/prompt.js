import React from 'react';
import './CSS/prompt.css'

function TopButton() {
    return (
        <div className='topButton' onClick={() => { window.scrollTo(0, 0) }}>
        </div>);
}

class Jump extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            num: props.num
        };
        this.change = props.change;
        this.name = ['基本信息', '学术能力', '社交能力', '普通能力', '结果'].map(
            (v, i) => <div className='jumpItems' onClick={(e) => { this.change(i) }}>{v}</div>);

    }

    handleResize(e) {
        if (e.innerWidth <= 1050) this.setState({ isShow: false });
        else this.setState({ isShow: true });
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    componentWillReceiveProps(props) {
        this.setState({ num: props.num });
    }

    render() {
        if (window.innerWidth <= 1050 && this.state.isShow) return <div></div>;
        return (
            (<div className='jump'>
                {this.name}
                <div className='jumpPoint'>
                    剩余总点数
            <div className='jumpPointNum'>{this.state.num}</div>
                </div>
            </div>)
        );
    }
}

class prompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div></div>
        );
    }
}

export {
    prompt,
    TopButton,
    Jump
};