import { CHANGE_PAGE } from "../type";
// https://webondev github io/
function action_changePage(value) {
    return { 
        type: CHANGE_PAGE,
        
        payload: value
    };
}

export default action_changePage;