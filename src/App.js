import React from 'react';
import './App.css';
import GifCard from'./GifCard';
import SearchField from './SearchField';

import axios from 'axios';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
          gifs:[]
        };
}

searchGif= (event)=> {
  event.preventDefault();
  let userInput = event.target[0].value;
  console.log(userInput);

  if (userInput === 'random'){
    axios.get('http://api.giphy.com/v1/gifs/random?api_key=5yml4vSkT9456BZ95jJxsBmidPKMuVB9')
    .then((resolve)=>{
       this.setState({gifs: resolve.data.data});
      //  console.log(resolve.data.data);
   })
   .catch ((err)=> console.log(err));

  }else{

   axios.get('http://api.giphy.com/v1/gifs/search?q='+userInput+'&api_key=5yml4vSkT9456BZ95jJxsBmidPKMuVB9')
   .then((resolve)=>{
      this.setState({gifs: resolve.data.data});
     // console.log(resolve.data.data);
  })
  .catch ((err)=> console.log(err));
}
}
componentDidMount(){

 axios.get('http://api.giphy.com/v1/gifs/trending?api_key=5yml4vSkT9456BZ95jJxsBmidPKMuVB9')
   .then((resolve)=>{
      this.setState({gifs: resolve.data.data});
      // console.log(resolve.data.data);
  })
  .catch ((err)=> console.log(err));
}



  render(){
    let elems =[];
    if(Array.isArray(this.state.gifs))
      elems = this.state.gifs.map((elem,i)=><GifCard key = {i} {...elem}/>)
    else
      elems = <GifCard {...this.state.gifs} />;

    
  return (
    <div >
      <header><h1> Enter Your Search </h1></header>
     {/* <br></br> */}

     <form onSubmit = {this.searchGif}>
       <label><strong> Search: </strong> </label>
       <input type ="text"/>
     </form>

        {elems}
    </div>
  );
}
}
export default App;
