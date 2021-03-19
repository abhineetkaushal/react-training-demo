import { CREATE_BOOK_URL, GET_BOOKS_URL } from "../constants/api"

export const getBooks = ()=>{
   return fetch(GET_BOOKS_URL)
    .then(response => response.json());
    // .then(response=>console.log(response))
}

export const addBook = (title)=>{
    return fetch(CREATE_BOOK_URL,{
        method:"POST",
        body:JSON.stringify({
            title,
            description:"Default"
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })
}