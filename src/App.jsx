import './App.css'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cards from './components/cards/cards'
import CardsDatos from './components/Datos/CardsDatos'
import React from 'react'

function App() {
 

  return (
    <div >

    <NavBar/>

    <ItemListContainer greeting= "Bienvenidos a DG CARS" />

    
    <div className='cardStyle'>
    {CardsDatos.map((dato, index) => (
            <React.Fragment key={index}>
              <div className={`col-3 card${index + 1}`}>
                <Cards
                  title = {dato.title}
                  description = {dato.description}
                  img = {dato.img}
                  img2 = {dato.img2}
                  botonPrecio = {`$${dato.botonPrecio}`}
                  precioSinSimbolo={dato.botonPrecio}
                                   
                />
              </div>
              {((index + 1) % 4 === 0 && index !== CardsDatos.length - 1) && (
                <div >
                  <br />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
  
  </div>
  )
}

export default App
