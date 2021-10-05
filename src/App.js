import React,{Fragment, useState} from 'react';
import './style.css';
import Turno from './turno';

export default function App() {

  const turnos = [{duenio: 'Juan', mascota: 'Nina'}];
  

  const handleOnClick = () => {
    console.log('Clickee el boton');
  };

  return (
    <Fragment>
    <div id="root"> 
    <div className="container">
      <h1>Administrador de Pacientes</h1>
      <div className="row">
        <div className="one-half column">
          <h2>Sacar turno</h2>
          <form>
          <label>Nombre Mascota</label>
          <textarea name="mascota" 
              class="u-full-width"></textarea>
              <br></br>
             <label>Nombre Dueño</label>
             <textarea name="dueño" 
              class="u-full-width"></textarea>
              <br></br>
              <label>Fecha</label>
              <br></br>
              <input type="date" name="Fecha" className="u-full-width" />
              
              <br/> <br/>
              <label>hora</label>
              <input type="time" name="hora"
              className="u-full-width"/>
              <br></br>
              <br></br>
              <label>Sintomas</label>
              <br></br>
              <textarea name="sintomas"
              class="u-full-width"></textarea>
               <br></br>
               <button type="button" onClick={handleOnClick} name="AgregarTurno" class="u-full-width button-primary">Agregar
              Turno</button>
            </form>

        </div>
        </div>
        <div class="one-half column">
        <h2>Administra tus turnos</h2>
        {turnos.map((turno) => {
          return <Turno duenio={turno.duenio} mascota={turno.mascota} />
        })}
        </div>
      </div>
    </div>
    </Fragment>

    
  );

  }