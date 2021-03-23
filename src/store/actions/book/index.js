import { getBooks } from "../../../services/book";
import { GET_LIST_FAILURE, GET_LIST_PENDING, GET_LIST_SUCCESS } from "../../constants"
 
export const getBookList = () => (dispatch)  =>{
    dispatch({type:GET_LIST_PENDING});
    getBooks().then((response)=>{
        console.log({response})
        dispatch({type:GET_LIST_SUCCESS,payload:{list:response.data}});
    }).catch(error=>{
        dispatch({type:GET_LIST_FAILURE,payload:error});
    })
}