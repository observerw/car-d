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
            num: props.num,
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
            num: props.num,
            isShowList: !props.isInitial,
        });
    }

    render() {
        if (!this.state.isShow) return null;
        return (
            (<div className='jump'>
                {this.state.isShowList && this.names}
                <div className='jumpPoint'>
                    剩余总点数
            <div className='jumpPointNum'>{this.state.num}</div>
                </div>
            </div>)
        );
    }
}

export {
    TopButton,
    Jump
};