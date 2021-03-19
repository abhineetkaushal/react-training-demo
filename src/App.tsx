import React,{Fragment, useEffect, useState,useReducer } from 'react'
import AddBookComponent from './components/Book/AddBookComponent';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main';
import { getBooks } from './services/book';
import "./App.css"
import { Book } from './types/apiResponse';

function useAdd(a:number,b:number){
    const [list,setList] = useState([]);
    return <div>
        {a+b}
    </div>;
}

function App(){
    const bool = false;
    const [list,setList] = useState<Book[]>([]);
    const [age,setAge] = useState(20);
    useEffect(()=>{
        getBooks()
        .then((res)=>{
            setList(res.data)
            console.log("This is getting called",res.data)
        })

    },[])
    

    return <div className="App">
    <Header title={"This is header"}/>
    <button onClick={()=>setAge(age+1)}>
         Increase {age}
    </button>
    <AddBookComponent/>
    <Main list={list}/>
    <Footer title={"This is footer"}/>
   
  </div>
}
// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             list:[]
//         }
//     }
//     shouldComponentUpdate(prevProps,prevState){
  //      if(prevState.counter!=this.state.counter){
    //        return true;
     //   }
//  }
//     componentDidMount(){
//         getBooks()
//         .then((res)=>{
//             this.setState({list:res.data})
//         })
//     }
//     render(){
//         return <div className="App">
//         <Header title={"This is header"}/>
//         <AddBookComponent/>
//         <Main list={this.state.list}/>
//         <Footer title={"This is footer"}/>
    
//       </div>
//     }

// }

export default App;