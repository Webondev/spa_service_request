//https://webondev.github.io/
import React from 'react'
import { connect } from 'react-redux'
import  mapDispatchToProps  from '../redux/mapDispatchToProps'
import  mapStateToProps  from '../redux/mapStateToProps'
import "./mainList.scss"

const MainList = (props)=>{

	const listItems = props.mainListData
		.filter((item)=> (item.type == "main") )
		.map((item, index) =>
			<li key={item.id}  
			onClick={()=>{ props.chooseMService({serviceId:item.id, page:"vew_item"}) }}
			>{item.title}</li>
		);
	
    return(
    	<div className=" ">
			<h2>Services</h2>
			<ul className="mainList">
				{listItems}
			</ul>
		</div>
    ) 
}

export default  connect( mapStateToProps("MainList"),
						 mapDispatchToProps("MainList") )(MainList)