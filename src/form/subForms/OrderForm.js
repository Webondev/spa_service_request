// https://webondev.github.io/
import React, {useState, useCallback, useEffect} from 'react' 
import { connect } from 'react-redux'
import  mapDispatchToProps  from '../../redux/mapDispatchToProps'
import  mapStateToProps  from '../../redux/mapStateToProps'
import "./OrderForm.scss" 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const useFormField = (initialValue = '', changeField, setConfirmStatus) => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = React.useCallback((e) =>{
	  setValue(e.target.value)
	  console.log(e.target.name)
	  setConfirmStatus(0)
	  changeField({
		  "fieldName":e.target.name,
		  "fieldValue": e.target.value
	  })
  }, []);
  return { value, onChange };
};
function checkField(name, value){
	if(!value){
		return false
	}
	return true
}
const checkFields = (form)=>{
	if( !checkField("name", form.name)
	    || !checkField("date", form.date) 
	    || !checkField("telephone", form.telephone) ){
		return false
	}
	return true
}

const OrderForm = (props)=>{
 
 	const maxDate = new Date( );
	maxDate.setMonth(maxDate.getMonth()+1);

	let initDate = new Date()
		
	if(props.form.date){
		initDate = props.form.date
	}
 	const [startDate, setStartDate] = useState(initDate);
	const [confirmStatus, setConfirmStatus] = useState(prev => {  return prev })
	
	const dateField = useFormField(props.form.date, props.changeField, setConfirmStatus)
    const nameField = useFormField(props.form.name, props.changeField, setConfirmStatus)
    const telephoneField = useFormField(props.form.telephone, props.changeField, setConfirmStatus)
	const commentField = useFormField(props.form.comment, props.changeField, setConfirmStatus)
	const mainItem = props.mainListData
		.filter((item)=> (item.id == props.currentServiceId) )
		.map((item, index) =>
			<div className="mainItem" key={item.id} >
				<h2>Confirm: {item.title} </h2>
			</div>
		);	 
	function err(data){
		if(!data && confirmStatus == 1){
			return "error"
		}
	}
	useEffect(( )=>{
 
	    setConfirmStatus(0)
		props.changeField({
		  "fieldName":"date",
		  "fieldValue": startDate
	  	})
		
		console.log("startDate", startDate)
	}, [startDate])

    return( 
    	<div className="OrderForm"> 
			<div className="backNavigation"
				onClick={()=>{ props.changePage("vew_item") }}	>&#60; Back</div>
			{mainItem}
 			<label>
				<span>Choose Date*</span>
				<DatePicker dateFormat="dd/MM/yyyy" 
					minDate={new Date()}
					maxDate={maxDate}
					selected={startDate} onChange={(date) => setStartDate(date)}
					className={err( props.form.date)}
				/>
			</label>

		 	<label>
				<span>Name*</span>
				<input type="text" name="name" className={err( props.form.name)} {...nameField}/>
			</label>
			<label>
				<span>Telephone*</span>
				<input type="text" name="telephone" className={err( props.form.telephone)} {...telephoneField}/>
			</label>
			<label>
				<span>Comment</span>
				<textarea rows="5" name="comment" {...commentField}></textarea>
			</label>

			{props.state.error && <div className="error_alert">{props.state.error }</div>}
			 
			<div className="orderFormBtn">
			<button disabled={props.state.error}  onClick={()=>{ 
				setConfirmStatus(1)
				if(checkFields(props.form)){
					props.submitForm()
				}
			}} >Confirm</button>
			</div>
		</div>
    ) 
}

export default  connect( mapStateToProps("OrderForm"),
						 mapDispatchToProps("OrderForm") )(OrderForm)