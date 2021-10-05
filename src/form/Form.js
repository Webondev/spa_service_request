import React from 'react'
import { connect } from 'react-redux'
import  mapDispatchToProps  from '../redux/mapDispatchToProps'
import  mapStateToProps  from '../redux/mapStateToProps'
import "./form.scss"
import MainList from './MainList'
import ViewItem from './ViewItem'
import OrderForm from './subForms/OrderForm'
import FormSended from './subForms/FormSended'

const Form = (props)=>{
	
	let block  = <MainList/>
	
	if(props.page=="vew_item" && props.currentServiceId){
		block = <ViewItem/>
	}else if(props.page=="order_form"){
		block = <OrderForm/>
	}else if(props.page=="form_sended"){
		block = <FormSended/>
	}
	
    return(
    	<div className="services_booking_block">
			{block}
		</div>
    ) 
}

export default  connect( mapStateToProps("Form"), mapDispatchToProps("Form") )(Form)