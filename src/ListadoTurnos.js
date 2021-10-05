import React from "react";

import PropTypes from "prop-types";
class ListadoTurnos extends React.Component{

    constructor (props){
      super(props);
      this.state={
      Listadoturnos:["mascotaagregada", "dueñoagregado", "fechaagregada", "horaagregada", "sintomasagregados"],
      };
    }
    render(){
      return (
        <Menu 
        mascotaagregada={this.state.Listadoturnos}
        dueñoagregado={this.state.Listadoturnos}
        fechaagregada={this.state.Listadoturnos}
        horaagregada={this.state.Listadoturnos}
        sintomasagregados={this.state.Listadoturnos}
        onAddOption={this.handleAddOption.bind(this)}
        />
      );
    }
    handleAddOption(){
      console.log(this.state.Listadoturnos);
/*this.setState({
        mascotaagregada:this.state.Listadoturnos.concat(["AgregarTurno"]),
        dueñoagregado:this.state.Listadoturnos.concat(["AgregarTurno"]),
        fechaagregada:this.state.Listadoturnos.concat(["AgregarTurno"]),
        horaagregada:this.state.Listadoturnos.concat(["AgregarTurno"]),
        sintomasagregados:this.state.Listadoturnos.concat(["AgregarTurno"]),

      });*/
    }

}
class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
render(){
  let mascotaagregada=this.props.mascotaagregada;
  let dueñoagregado=this.props.dueñoagregado;
  let fechaagregada=this.props.fechaagregada;
  let horaagregada=this.props.horaagregada;
  let sintomasagregados=this.props.sintomasagregados;
  return(
    <div>
{mascotaagregada.map((Listadoturnos)=>(
      <p>{mascotaagregada} </p>
         )   )}
         {dueñoagregado.map((Listadoturnos)=>(
      <p>{dueñoagregado} </p>
         )   )}
         {fechaagregada.map((Listadoturnos)=>(
      <p>{fechaagregada} </p>
         )   )}
           {horaagregada.map((Listadoturnos)=>(
      <p>{horaagregada} </p>
         )   )}
           {sintomasagregados.map((Listadoturnos)=>(
      <p>{sintomasagregados} </p>
         )   )}
           <button onClick={handleAddOption()}>Nueva Opción</button>
    </div>
  )
  }
}
