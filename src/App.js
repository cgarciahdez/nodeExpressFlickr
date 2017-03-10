import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './search';
import Photos from './photos';
import axios from 'axios';
import ColorChooser from './colorChooser'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      colors:["0","2","3","4","5","6","7","8","9","a","c","e"]
    }
  }
  //{"0":0,"2":1,"3":2,"4":3,"5":4,"6":5,"7":6,"8":7,"9":8,"a":9,"c":10,"e":11},

  getPhotos(terms){
    console.log(this.state.colors);
    this.setState({photos:[]},()=>{
      console.log(this.state.photos);
      this.state.colors.map((color, i)=>{
        //console.log("/flickr/"+terms+" "+color)
        if(color){
          console.log("COLOR: "+color);
          axios.get("/flickr/"+terms,{params:{"color":color,"limit":10}})
          .then(response => {
            console.log(response);

            var photos = response.data.photos.photo;
            this.state.photos[i]=photos;
            this.setState({
              photos: this.state.photos
            })
          })
        }
      })
    })
  }

  addColor(val){
    console.log("add");
    console.log(val);
    var color = val.split(":")[0];
    var index = parseInt(val.split(":")[1]);
    this.state.colors[index]=color;
    this.setState({
      colors:this.state.colors
    })
  }

  removeColor(val){
    console.log("remove");
    console.log(val);
    var color = val.split(":")[0];
    var index = parseInt(val.split(":")[1]);
    this.state.colors[index]=undefined;
    this.setState({
      colors:this.state.colors
    })
  }


  render() {
    return (
      <div className="row text-center">
        <div className="col-md-1" ></div>
        <div className="col-md-10">
        <h1 clasName="titulo ">Flickrainbow</h1>
        <br></br>
        <Search getPhotos={this.getPhotos.bind(this)}></Search>
        <br></br>
        <h2>Choose your own Rainbow!</h2>
        <h4>Write the term (or terms!) you want to look for, choose the colors that you want to see in your rainbow, and click search!</h4>
        <br></br>
        <ColorChooser addColor={this.addColor.bind(this)} removeColor={this.removeColor.bind(this)}></ColorChooser>
        <br></br>
        <Photos fotos={this.state.photos}></Photos>
        </div>
      </div>
    )
  }
}

export default App;
