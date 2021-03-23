import { GET_LIST_FAILURE, GET_LIST_PENDING, GET_LIST_SUCCESS } from "../../constants"

const initialState={
    error:false,
    loading:false,
    list:[]
}
const BookReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_LIST_FAILURE:
            return {...state,error:true,loading:false}
        case GET_LIST_PENDING:
            return {...state,loading:true}
        case GET_LIST_SUCCESS:
            return {...state,list:action.payload.list,loading:false}
        default:
            return state;
    }

}
export default BookReducer