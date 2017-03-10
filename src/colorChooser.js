import React, { PropTypes } from 'react'

class ColorChooser extends React.Component {

  changeColor(chckbx){
    console.log(chckbx.checked)
    if(chckbx.checked){
      this.props.addColor(chckbx.name);
    }else{
      this.props.removeColor(chckbx.name);
    }
  }

//{"0":0,"2":1,"3":2,"4":3,"5":4,"6":5,"7":6,"8":7,"9":8,"a":9,"c":10,"e":11},
  render () {
    return(
      <div className="row">
        <div className="col-md-1 text-center">
          <input className="colorp" type="checkbox" name="0:0" defaultChecked onChange={(event)=>{this.changeColor(event.target)}}></input><i style={{"color":"#ff2000"}} className="fa fa-square fa-2x"></i>
        </div>
        <div className="col-md-1 text-center">
          <input className="colorp" type="checkbox" name="2:1" defaultChecked onChange={(event)=>{this.changeColor(event.target)}}></input><i style={{"color":"#ff7c00"}} className="fa fa-square fa-2x"></i>
        </div>
        <div className="col-md-1 text-center">
          <input className="colorp" type="checkbox" name="3:2" defaultChecked onChange={(event)=>{this.changeColor(event.target)}}></input><i style={{"color":"#ffcf00"}} className="fa fa-square fa-2x"></i>
        </div>
        <div className="col-md-1 text-center">
          <input className="colorp" type="checkbox" name="4:3" defaultChecked onChange={(event)=>{this.changeColor(event.target)}}></input><i style={{"color":"#fffa00"}} className="fa fa-square fa-2x"></i>
        </div>
        <div className="col-md-1 text-center">
          <input className="colorp" type="checkbox" name="5:4" defaultChecked onChange={(event)=>{this.changeColor(event.target)}}></input><i style={{"color":"#90e200"}} className="fa fa-square fa-2x"></i>
        </div>
        <div className="col-md-1 text-center">
          <input className="colorp" type="checkbox" name="6:5" defaultChecked onChange={(event)=>{this.changeColor(event.target)}}></input><i style={{"color":"#00ab00"}} className="fa fa-square fa-2x"></i>
        </div>
        <div className="col-md-1 text-center">
          <input className="colorp" type="checkbox" name="7:6" defaultChecked onChange={(event)=>{this.changeColor(event.target)}}></input><i style={{"color":"#00b2d4"}} className="fa fa-square fa-2x"></i>
        </div>
        <div className="col-md-1 text-center">
          <input className="colorp" type="checkbox" name="8:7" defaultChecked onChange={(event)=>{this.changeColor(event.target)}}></input><i style={{"color":"#0062c6"}} className="fa fa-square fa-2x"></i>
        </div>
        <div className="col-md-1 text-center">
          <input className="colorp" type="checkbox" name="9:8" defaultChecked onChange={(event)=>{this.changeColor(event.target)}}></input><i style={{"color":"#8c20ba"}} className="fa fa-square fa-2x"></i>
        </div>
        <div className="col-md-1 text-center">
          <input className="colorp" type="checkbox" name="a:9" defaultChecked onChange={(event)=>{this.changeColor(event.target)}}></input><i style={{"color":"#f52394"}} className="fa fa-square fa-2x"></i>
        </div>
        <div className="col-md-1 text-center">
          <input className="colorp" type="checkbox" name="c:10" defaultChecked onChange={(event)=>{this.changeColor(event.target)}}></input><i className="fa fa-square-o fa-2x"></i>
        </div>
        <div className="col-md-1 text-center">
          <input className="colorp" type="checkbox" name="e:11" defaultChecked onChange={(event)=>{this.changeColor(event.target)}}></input><i style={{"color":"#000"}} className="fa fa-square fa-2x"></i>
        </div>
      </div>
    )
  }
}

export default ColorChooser;
