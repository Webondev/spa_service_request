import { CHOOSE_MSERVICE } from "../type";
function action_chooseMService(value) {
    return { 
        type: CHOOSE_MSERVICE,
        
        payload: value
    };
}

export default action_chooseMService;