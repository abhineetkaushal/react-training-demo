import React,{Fragment, useEffect, useState,useReducer } from 'react'
import AddBookComponent from './components/Book/AddBookComponent';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main';
import "./App.css"
import { useDispatch, useSelector } from 'react-redux';
import { getBookList } from './store/actions/book';
import { incrementCount } from './store/actions/count';
import { INCREMENT } from './store/constants';

 

function App(){
    // const [list,setList] = useState([]);
    // const [age,setAge] = useState(20);
    const age = useSelector(state=>state.countState.count)
    const bookState = useSelector(state=>state.book)
    const dispatch = useDispatch();
    console.log({bookState})
    useEffect(()=>{
        dispatch(getBookList());
    },[])
    const setAge = ()=>{
      dispatch({type:INCREMENT})
    }    
    

    return <div className="App">
    <Header title={"This is header"}/>
    <button onClick={()=>setAge(age+1)}>
         Increase {age}
    </button>
    <AddBookComponent/>
    {bookState.loading && <div>Loading...</div>}
    {bookState.error && <div>Failed to Load</div>}
    <Main list={bookState.list}/>
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