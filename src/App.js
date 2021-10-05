import React from 'react'
import { connect } from 'react-redux'
import Button from "./button/Button"
import Form from "./form/Form"
import  mapDispatchToProps  from './redux/mapDispatchToProps'
import  mapStateToProps  from './redux/mapStateToProps'

const  App = (props)=>{

	let block = <Button/>
	if(props.page == "btn"){

	}else{
		block = <Form/>
	}

    return( 
		<> 	
			{block}
		</>
    ) 
}
export default  connect( mapStateToProps("App"), mapDispatchToProps("App") )(App)