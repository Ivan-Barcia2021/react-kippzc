import React from "react";

import PropTypes from "prop-types";
class Turno extends React.Component {
constructor(props) {
  super(props);
}

render(){
  let mascota=this.props.mascota;
  let duenio=this.props.duenio;
  let Fecha=this.props.Fecha;
  let hora=this.props.hora;
  let sintomas=this.props.sintomas;
  return (
    <div className="cita">
        <p name="mascotaagregada">Mascota: <span>{mascota}</span></p>
            <p name="dueñoagregado">Dueño:  <span>{duenio}</span></p>
            <p name="fechaagregada" >Fecha:  <span>2021-08-05</span></p>
            <p name="horaagregada" >Hora:  <span>08:20</span></p>
            <p name="sintomasagregados"  >Sintomas:<span>Le duele la pierna</span></p><button class="button elimnar u-full-width">Eliminar
              </button>
        </div>
  )
}}

export default Turno;