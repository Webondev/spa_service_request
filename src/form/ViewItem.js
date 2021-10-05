import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import  mapDispatchToProps  from '../redux/mapDispatchToProps'
import  mapStateToProps  from '../redux/mapStateToProps'
import "./viewItem.scss"

const ViewItem = (props)=>{

	let map = new Map();
	const [orderList, setOrderList] =  useState(  map  )
	useEffect(()=>{
		if(props?.orderList){
			setOrderList(props.orderList)
		}
	}, [])
	
	const [mtime, setMtime] =  useState(  1  )
	const mainItem = props.mainListData
		.filter((item)=> (item.id == props.currentServiceId) )
		.map((item, index) =>
			<div className="mainItem" key={item.id} >
				<h2>Service: {item.title}</h2>
				<div className="desc">
					{item.desc}
				</div>
			</div>
		);	 
	function checkBoxChange(item){
		setMtime(Date.now())
		if(!orderList.size){
			setOrderList((prev)=>{
				prev.set(item.id, item)
				return prev
			})	
			return
		}else if(orderList.has(item.id)){
			orderList.delete(item.id)
		}else{
			setOrderList((prev)=>{
				prev.set(item.id, item)
				return prev
			})
		} 
}
	const listItems = props.mainListData
		.filter((item)=> (item.type != "main") )
		.filter((item)=>  item.parent_id.includes( props.currentServiceId) ) 
		.map((item, index) =>
			<li key={item.id}    >
				<label>
					<input type="checkbox" 
						checked={orderList.has(item.id) && "checked"} 
						onChange={ ()=>{checkBoxChange(item) }}
						name="subItems" value={item.id} />
						   
					{item.title}
				</label>
			</li> 
		);	 

    return(
    	<div className="viewItem" data-mtime={mtime}>
			<div className="backNavigation" 
				onClick={()=>{ 
				props.chooseMService({ serviceId: null, page:"main_list"})
			//	props.changePage("main_list") 
			}}>&#60; Back</div>
			{mainItem}
 
			<ul className="subList">
				{listItems}	 
			</ul>
			<button onClick={()=>{
				props.makeOrder({page:"order_form", orderList: orderList  })
			}} >Confirm</button>
		</div>
    ) 
}

export default  connect( mapStateToProps("ViewItem"),
						 mapDispatchToProps("ViewItem") )(ViewItem)