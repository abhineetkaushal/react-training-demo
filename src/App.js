import React,{Fragment } from 'react'
import AddBookComponent from './components/Book/AddBookComponent';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main';
import { getBooks } from './services/book';
import "./App.css"
class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            list:[]
        }
    }
    componentDidMount(){
        getBooks()
        .then((res)=>{
            this.setState({list:res.data})
        })
    }
    render(){
        return <div className="App">
        <Header title={"This is header"}/>
        <AddBookComponent/>
        <Main list={this.state.list}/>
        <Footer title={"This is footer"}/>
    
      </div>
    }

}

export default App;