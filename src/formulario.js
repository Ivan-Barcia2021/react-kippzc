import React from "react";

import PropTypes from "prop-types";
class formulario extends React.componet {
  constructor (props){
    super(props);
    this.state={
      formulario:["turno","Listadoturnos"],
    };
  }
  render(){
  return(
    <Menu 
    turno={this.state.formulario}
ListadoTurnos={this.state.formulario}

   
    />
  )  
  };

 

}

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    let turno=this.props.turno;
    let Listadoturnos=this.props.turno;
    return(
      <div>
           {turno.map((formulario)=>(
      <p>{turno} </p>
         )   )}
                {Listadoturnos.map((formulario)=>(
      <p>{Listadoturnos} </p>
         )   )}
          </div>
    )
  }
}  
ReactDOM.render(<App />, document.getElementById("App"));