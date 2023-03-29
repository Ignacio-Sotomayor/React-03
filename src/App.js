import logo from './logo.svg';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form, FormGroup } from 'react-bootstrap';


import './App.css';

function App() {
  
  
  return (
      <Container>
        <div className='contenedor'>
          <Form onSubmit={verVocales}>
            <Form.Group id="1">
              <p>
                Ingrese una frase: 
              </p>
              <p>          
                <Form.Control type='text' name='Frase' placeholder='Ingrese una frase'/>
              </p>
            </Form.Group>
            <Form.Group id="Boton">
              <Button variant="info" type="submit" >
                Ver vocales
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Container>
  );
}

function verVocales(e){
  e.preventDefault();
  let oracion = ((e.target.Frase.value).toLowerCase());
  let vocales = 0; 
  
  for ( let i=0; i< oracion.length; i++){
    let letra = oracion.charAt(i);
    if(letra == 'a'||letra == 'e'||letra == 'o'||letra == 'i'||letra == 'u'){
      vocales++;
    }
  }
  alert("La frase tiene "+ vocales + " vocales");
}

export default App;
