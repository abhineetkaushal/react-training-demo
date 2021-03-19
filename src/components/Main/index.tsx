import React from 'react';
import { Book } from '../../types/apiResponse';
import  BookItem from '../Book/BookItem';
const Main = ({list}:{list:Book[]})=>{
    // const list = props.list;
    return <div>
        {list.map((item)=><BookItem title={item.title} key={item._id} />)}
    </div>
}
 export default Main;