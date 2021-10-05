import { bindActionCreators } from 'redux';
import action_changePage from './actionCreators/action_changePage';
import action_chooseMService from './actionCreators/action_chooseMService';
import action_makeOrder from './actionCreators/action_makeOrder';
import action_submitOrder from './actionCreators/action_submitOrder';
import action_changeField from './actionCreators/action_changeField';

function mapDispatchToProps(component) {  
    switch(component) {
        case "App": return function(dispatch) {
            return {
               // changePage: bindActionCreators(action_changePage, dispatch),
            };
        };      
        case "Form": return function(dispatch) {
            return {
               // changePage: bindActionCreators(action_changePage, dispatch),
            };
        };
        case "Button": return function(dispatch) {
            return {
                changePage: bindActionCreators(action_changePage, dispatch),
            };
        };
        case "MainList": return function(dispatch) { 
            return {
                chooseMService: bindActionCreators(action_chooseMService, dispatch),
            };
        };       
		case "ViewItem": return function(dispatch) {
            return {
			   chooseMService: bindActionCreators(action_chooseMService, dispatch),
               makeOrder: bindActionCreators(action_makeOrder, dispatch)
            };
        };
        case "OrderForm": return function(dispatch) {
            return {
                submitForm: bindActionCreators(action_submitOrder, dispatch),
				changePage: bindActionCreators(action_changePage, dispatch),
				changeField: bindActionCreators(action_changeField, dispatch),
            }
        }
       
              
        default: return undefined;
    }
}

export default mapDispatchToProps;