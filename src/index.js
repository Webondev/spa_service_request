//require('file-loader?name=[name].[ext]!./index.html')
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App' 
import './App.scss'

import { reducer } from './redux/reducer'
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { mainListData } from "./data/mainListData"
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const appElement = document.getElementById('app')

let initialStore = {
    page:"btn",  // btn, main_list, vew_item,  order_form, form_sended /// result_list, date_chooser, finish_form
	currentServiceId: null, // текущий выбранный сервис для просмотра
    mainListData: mainListData, // list of services
    orderList: null, // list choosed services
	error:"",
	form:{
		name:"",
		telephone:"",
		comment:"",
		date:""
	}
}

const store = createStore(reducer, initialStore,  composeWithDevTools(applyMiddleware(thunk) ) );
/*store.subscribe(()=>{
	//console.log("subscribe", store.getState(), "")
})*/

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, appElement)