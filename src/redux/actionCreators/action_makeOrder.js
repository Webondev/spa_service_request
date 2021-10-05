import { MAKE_ORDER } from "../type";
// https://webondev githu bio
function action_makeOrder(value) {
    return { 
        type: MAKE_ORDER,
        payload: value
    };
}

export default action_makeOrder;