import { combineReducers } from "redux";
import example from "store/modules/example";

const rootReducer = combineReducers({
    example: example,
})

export default rootReducer;