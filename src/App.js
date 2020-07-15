import React from 'react';
import { Academic, Social, Normal } from './components/prop'
import { TopButton, Jump } from "./components/prompt";
import Result from './components/result';
import Basic from './components/basic'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ser: 0,
            point: 20,
            isPress: false,
            isInitial: true,
        }
        this.callback = {
            cost: this.changePoint.bind(this),
            submit: this.handleSubmit.bind(this)
        }
        this.pageNum = 5;
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentWillMount() {
        window.addEventListener('keydown', e => this.handleKeyPress(true, e));
        window.addEventListener('keyup', e => this.handleKeyPress(false, e));
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', e => this.handleKeyPress(true, e));
        window.removeEventListener('keyup', e => this.handleKeyPress(false, e));
    }

    handleKeyPress(mode, e) {
        if (mode) {
            if (!this.state.isPress && e.keyCode == 17) this.setState({ isPress: true });
        } else this.setState({ isPress: false });
    }

    changeSer(e) {
        window.scrollTo(0, 0);
        if (this.state.ser > this.pageNum || this.state.ser < 0) return;
        if (this.state.ser === this.pageNum - 2 && this.state.isInitial) this.setState({ isInitial: false });
        if (e.target.value === 'add')
            this.setState({ ser: this.state.ser + 1 });
        if (e.target.value === 'sub')
            this.setState({ ser: this.state.ser - 1 });
    }

    jumpSer(num) {
        window.scrollTo(0, 0);
        this.setState({ ser: num });
    }

    changePoint(e, num) {
        let b = this.state.isPress;
        let p = this.state.point;
        if (e.target.value === 'add') {
            if (this.state.point === 0) return 0;  //如果总点数为0则减小操作无效
            else {
                let v = b ? (p > 10 ? 10 : p) : 1;
                this.setState({ point: p - v });
                return v;
            }
        }
        else if (e.target.value === 'sub') {
            if (num === 0) return 0;   //如果对象剩余点数为0则增加操作无效
            else {
                let v = b ? (num > 10 ? 10 : num) : 1;
                this.setState({ point: p + v });
                return -v;
            }
        }
    }

    handleSubmit(data, name) {
        this.setState({ [name]: data });
    }

    render() {
        var temp = [
            <Basic submit={this.handleSubmit.bind(this)} />,
            <Academic callback={this.callback} />,
            <Social callback={this.callback} />,
            <Normal callback={this.callback} />, <Result data={this.state} />];
        return (
            <div className="App">
                <Jump change={this.jumpSer.bind(this)} num={this.state.point} isInitial={this.state.isInitial} />
                <div className='inputArea'>
                    {temp[this.state.ser]}
                </div>
                <div className='buttonArea'>
                    {this.state.ser > 0
                        && <button className='button button-left' value='sub' onClick={this.changeSer.bind(this)}>上一步</button>}
                    {this.state.ser < 4
                        && <button className='button button-right' value='add' onClick={this.changeSer.bind(this)}>下一步</button>}
                </div>
                <TopButton />
            </div>
        );
    }
}

export default App;