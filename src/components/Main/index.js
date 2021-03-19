import React from 'react';
import  BookItem from '../Book/BookItem';
const Main = (props)=>{
    const list = props.list;
    return <div>
        {list.map(item=><BookItem title={item.title} key={item._id} />)}
    </div>
}
 export default Main;