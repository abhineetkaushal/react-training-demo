import React from 'react'
import "./style.css";
function BookItem(props) {
    const title = props.title;
    return (
        <div className="bookTitle">   
            {title}
        </div>
    )
}

export default BookItem
