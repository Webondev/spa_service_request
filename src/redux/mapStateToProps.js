function mapStateToProps(component) {
    switch(component) {
 
        case "Button": {
            return function (state) {
                return {
                  //  state: state
                }
            }
        }
        case "App": {
            return function (state) {
                return {
                    page: state.page,
                    
                }
            }
        }
        case "Form": {
            return function (state) {
                return {
                    page: state.page,
                    currentServiceId:state.currentServiceId
                }
            }
        }
  case "MainList": {
            return function (state) {
                return {
					state: state,
                    page: state.page,
                    mainListData: state.mainListData,
                }
            }
        }
		  case "ViewItem": {
            return function (state) {
                return {
					state: state,
                    page: state.page,
					orderList: state.orderList,
                    mainListData: state.mainListData,
					currentServiceId:state.currentServiceId
                }
            }
        }	
        case "OrderForm": {
            return function (state) {
                return {
					state: state,
                    page: state.page,
					form: state.form,
                    mainListData: state.mainListData,
					currentServiceId:state.currentServiceId
                }
            }
        }	
        default: return undefined;
    }
}

export default mapStateToProps;