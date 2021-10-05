import React from 'react'
import { connect } from 'react-redux'
import  mapDispatchToProps  from '../redux/mapDispatchToProps'
import  mapStateToProps  from '../redux/mapStateToProps'
import "./button.scss"
// https://-webo ndev-github.io/
const  Button = (props)=>{
    return(
        <div className="front_button">
            <button  onClick={()=>{ props.changePage("main_list") }}> View services </button>
        </div>
    ) 
}

export default  connect( mapStateToProps("Button"), mapDispatchToProps("Button") )(Button)