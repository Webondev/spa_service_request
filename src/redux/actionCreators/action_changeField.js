import { CHANGE_FIELD } from "../type";
function action_changeField(value) {
    return { 
        type: CHANGE_FIELD,
        payload: value
    };
}

export default action_changeField;