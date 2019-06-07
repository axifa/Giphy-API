import React from 'react';
import './App.css';

import axios from 'axios';

class GifCard extends React.Component {
  constructor (props){
    super(props);


  }

  render(){
      console.log(this.props);
      return (
        <div>
          <label>This is image</label>
          <img src ={this.props.images.downsized.url} />
        </div>
      ); 
  }
}
export default GifCard;
