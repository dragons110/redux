import React from 'react'
import ReactDom from 'react-dom'


import App from './components/app'
import store from './redux/store'


function render() {
    ReactDom.render(<App store={store}/>,document.getElementById('root'))
}
//初始化渲染
render()

store.subscribe(render)
