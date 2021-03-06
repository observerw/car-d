import React from 'react';
import PropTable from './components/prop'
import {TopButton, Jump} from "./components/tools";
import Result from './components/result';
import Basic from './components/basic'
import './App.css';
import data from './components/data/intro.json'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ser: 0,
            GP: 50,
            AP: 16,
            isPress: false,
            isInitial: true,
        }
        this.callback = {
            cost: this.changePoint.bind(this),
            submit: this.handleSubmit.bind(this)
        }
        this.pageNum = Object.keys(data.transName).length;
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
            if (!this.state.isPress && e.keyCode == 17) this.setState({isPress: true});
        } else this.setState({isPress: false});
    }

    changeSer(e) {
        window.scrollTo(0, 0);
        if (this.state.ser > this.pageNum || this.state.ser < 0) return;
        if (this.state.ser === this.pageNum - 2 && this.state.isInitial) this.setState({isInitial: false});
        if (e.target.value === 'add')
            this.setState({ser: this.state.ser + 1});
        if (e.target.value === 'sub')
            this.setState({ser: this.state.ser - 1});
    }

    jumpSer(num) {
        window.scrollTo(0, 0);
        this.setState({ser: num});
    }

    changePoint(mode) {
        return function (e, num) {
            let b = this.state.isPress;
            let p = this.state[mode];
            let name = mode;
            if (e.target.value === 'add') {
                if (p === 0) return 0;  //如果总点数为0则减小操作无效
                else {
                    let v = b ? (p > 10 ? 10 : p) : 1;
                    this.setState({[name]: p - v});
                    return v;
                }
            } else if (e.target.value === 'sub') {
                if (num === 0) return 0;   //如果对象剩余点数为0则增加操作无效
                else {
                    let v = b ? (num > 10 ? 10 : num) : 1;
                    this.setState({[name]: p + v});
                    return -v;
                }
            }
        }.bind(this);
    }

    handleSubmit(data, name) {
        this.setState({[name]: data});
    }

    render() {
        var rawPage = [
            <Basic submit={this.handleSubmit.bind(this)}/>,
            <PropTable name='Academic' key={'Academic'} callback={this.callback}/>,
            <PropTable name='Social' key={'Social'} callback={this.callback}/>,
            <PropTable name='Technique' key={'Technique'} callback={this.callback}/>,
            <PropTable name='Normal' key={'Normal'} callback={this.callback}/>,
            <Result data={this.state}/>];
        var page = [
            <Basic submit={this.handleSubmit.bind(this)}/>,
            <PropTable name='Academic' class="AP" key={1}
                       callback={this.callback}/>,
            <PropTable name='Normal' class="GP" key={2}
                       callback={this.callback}/>,
            <PropTable name='Property' class="GP" key={3}
                       callback={this.callback}/>,
            <Result data={this.state}/>
        ];

        return (
            <div className="App">
                <Jump change={this.jumpSer.bind(this)}
                      num={[this.state.GP, this.state.AP]}
                      isInitial={this.state.isInitial}/>
                <div className='inputArea'>
                    {page[this.state.ser]}
                </div>
                <div className='buttonArea'>
                    {this.state.ser > 0
                    && <button className='button button-left' value='sub'
                               onClick={this.changeSer.bind(this)}>上一步</button>}
                    {this.state.ser != this.pageNum - 1
                    && <button className='button button-right' value='add'
                               onClick={this.changeSer.bind(this)}>下一步</button>}
                    <TopButton/>
                </div>
            </div>
        );
    }
}

export default App;