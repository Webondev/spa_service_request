// import { CheckMonsters, getRandomArbitrary } from "./CheckMonsters";
import {CHANGE_PAGE, CHOOSE_MSERVICE, MAKE_ORDER, SUBMIT_ORDER, CHANGE_FIELD, SUBMIT_ORDER_ERR} from "./type"

export  function reducer(state, action) {
    switch(action.type) {
        case CHANGE_PAGE: return { ...state,
            page: action.payload
         };
 
         case CHOOSE_MSERVICE: return { ...state,
            page: action.payload.page,
            currentServiceId: action.payload.serviceId,
         }
		 case MAKE_ORDER: return { ...state,
            page: action.payload.page,
            orderList: action.payload.orderList
         } 
		 case CHANGE_FIELD: return { ...state,
             
            form: {...state.form, [action.payload.fieldName]:action.payload.fieldValue }
         } 
		 case SUBMIT_ORDER: return { ...state,
            page: "form_sended",
           
         } 
       case SUBMIT_ORDER_ERR: return { ...state,
            error: action.payload

         }
        default: return state;
    }
}