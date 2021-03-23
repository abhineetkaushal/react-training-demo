import { INCREMENT } from "../../constants"

export const incrementCount = ()=>(dispatch)=>{
    dispatch({type:INCREMENT});
}
