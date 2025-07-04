import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {

     // creando state de citas
     const [cita,actualizarcita] = useState({

        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : ''

     });

     const [error,actualizarError] = useState(false)

     // opcion que se ejecuta cada vez que un usuario escribe en un input
        const actualizandostate = (e) => {
           actualizarcita ({
            ...cita,
            [e.target.name] : e.target.value
           })
        }

     // extraer los valores
        const {mascota,propietario,fecha,hora,sintomas} = cita;
     
     // cuando el usuario presiona botton agregar cita
     
       const submitcita = (e)=> {
        e.preventDefault();

        // validar
           if(mascota.trim() === ''  || propietario.trim() === '' ||  fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''  ) {
                actualizarError(true);
                return ;
           }

           //Eliminar el mensaje previo
           actualizarError(false);

        //asignar un id
        cita.id= uuidv4();


        //crear la cita
        crearCita(cita);

        //reiniciar el form
         actualizarcita({
              mascota : '',
              propietario : '',
              fecha : '',
              hora : '',
              sintomas : ''


         });
        
       }


    return ( 
<Fragment>
    <h2>Crear Cita</h2>
    {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}

    <form  
            onSubmit={submitcita}
    >
        <label>Nombre Mascota</label>
        <input
                type='texto'
                name='mascota'
                className='u-full-width'
                placeholder='Nombre Mascota'
                onChange={actualizandostate}
                value = {mascota}
        
        />
        
         <label>Nombre Dueño</label>
        <input
                type='texto'
                name='propietario'
                className='u-full-width'
                placeholder='Nombre Dueño de la Mascota'
                onChange={actualizandostate}
                value={propietario}
        
        />

         <label>Fecha</label>
        <input
                type='date'
                name='fecha'
                className='u-full-width'
                onChange={actualizandostate}
                value={fecha}
        
        />

         <label>Hora</label>
        <input
                type='time'
                 name='hora'
                className='u-full-width'
                onChange={actualizandostate}
                value={hora}
             
        
        />

         <label>Síntomas</label>
          <textarea 
                 name='sintomas'
                className='u-full-width' 
                onChange={actualizandostate}
                value={sintomas}
       
                  ></textarea>
        
           <button
                    type='submit' 
                    className='u-full-width button-primary' 
           
           >Agregar Cita</button>
        
        
        
        
        
    </form>


</Fragment>
        

     );
}

Formulario.propTypes = {
   crearCita: PropTypes.func.isRequired
}
 
export default Formulario;
