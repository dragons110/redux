import React, {Component} from 'react'
export default class App extends Component{
    
    state = {
        count: 0
    }
    increment = () => {
        //1、得到选择的增加数量
        const number = this.select.value*1
        //2、得到原本的count状态，并计算新的count值
        const count = this.state.count + number
        //3、更新状态
        this.setState({count})
    }
    decrease = () => {
        //1、得到选择的增加数量
        const number = this.select.value*1
        //2、得到原本的count状态，并计算新的count值
        const count = this.state.count - number
        //3、更新状态
        this.setState({count})
    }
    incrementIfOdd = () => {
        //1、得到选择的增加数量
        const number = this.select.value*1
        //2、得到原本的count状态,判断是否为奇数
        const count = this.state.count
        if(count%2===1){
            //3、更新状态
            this.setState({count:count + number})
        }
         
    }
    incrementAsync = () => {
        //1、得到选择的增加数量
        const number = this.select.value*1
        //2、得到原本的count状态，异步
        const count = this.state.count
        setTimeout(() => {
        //3、更新状态
        this.setState({count:count + number})
        },500)
        
    }
    
    render(){

        const {count} = this.state

        return (
            <div>
            <h2>Click {count} times</h2>
            <select ref={select => this.select = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrease}>-</button>&nbsp;
            <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
            <button onClick={this.incrementAsync}>increment async</button>
            </div>
                
        )
    }
}