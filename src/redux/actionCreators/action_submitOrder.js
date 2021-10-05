import { SUBMIT_ORDER, SUBMIT_ORDER_ERR } from "../type";
import regeneratorRuntime from "regenerator-runtime"

function action_submitOrder(value) {
               
    return async dispatch=>{
        let error = ""
        let is_success = 0
      
        await fetch("make_request.json") 
            .then(response => response.json())
            .then(json =>{
                is_success = 1
            })
            .catch(function(err) {
                error = "error happend, try later"
            
            });
            if(is_success){
                dispatch({ 
                    type: SUBMIT_ORDER,
                    payload: value
                })
            }else if(!is_success && error){
                dispatch({ 
                    type: SUBMIT_ORDER_ERR,
                    payload: error
                })
            }              
       
    }
}

export default action_submitOrder;