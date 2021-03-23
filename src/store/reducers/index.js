import { combineReducers } from "redux";
import BookReducer from "./book";
import CountReducer from "./count";

const rootReducer = combineReducers({
    book:BookReducer,
    countState:CountReducer
});
export default rootReducer;