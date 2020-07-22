import React from 'react';
import './CSS/prompt.css'
import data from './data/intro.json'
import { sha256 } from 'js-sha256';
var names = Object.values(data.transName);

function TopButton() {
    return (
        <div className='topButton' onClick={() => { window.scrollTo(0, 0) }}>
        </div>);
}

class Jump extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: window.innerWidth >= 1050,
            isShowList: !props.isInitial,
            GP: props.num[0],
            AP: props.num[1],
        };
        this.change = props.change;
        this.names = names.map(
            (v, i) => <div className='jumpItems' id={sha256(v)} onClick={(e) => { this.change(i) }}>{v}</div>);

        window.addEventListener('resize', this.handleResize.bind(this));

    }

    handleResize(e) {
        if (window.innerWidth < 1050) this.setState({ isShow: false });
        else this.setState({ isShow: true });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    componentWillReceiveProps(props) {
        this.setState({
            GP: props.num[0],
            AP: props.num[1],
            isShowList: !props.isInitial,
        });
    }

    render() {
        if (!this.state.isShow) return null;
        return (
            (<div className='jump'>
                {this.state.isShowList && this.names}
                <div className='jumpPoint'>
                    调查技能点数
                <div className='jumpPointNum'>{this.state.AP}</div>
                </div>
                <div className='jumpPoint'>
                    通用技能点数
                <div className='jumpPointNum'>{this.state.GP}</div>
                </div>
            </div>)
        );
    }
}

export {
    TopButton,
    Jump
};