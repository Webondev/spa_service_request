import React  from 'react'
import { connect } from 'react-redux'
import  mapDispatchToProps  from '../../redux/mapDispatchToProps'
import  mapStateToProps  from '../../redux/mapStateToProps'
import "./formSended.scss" 
// https://webondev.github.io/
const FormSended = (props)=>{
    return(
    	<div className="FormSended">
		 <h2> Thnx for request!</h2>
		</div>
    ) 
}

export default  connect( mapStateToProps("FormSended"),
						 mapDispatchToProps("FormSended") )(FormSended)