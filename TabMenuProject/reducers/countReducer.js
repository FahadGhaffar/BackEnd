

import { COUNTER_CHANGE } from "../constants/index.js"

const initialState = {
    count: {}
};
const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_CHANGE:
            return {
                ...state,
                count: action.payload
            };
        default:
            return state;
    }
}
export default countReducer;