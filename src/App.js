import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">

      <NavBar />


      <ItemListContainer greeting="¡Bienvenidos a FRIMA! Encuentra los mejores repuestos y accesorios para tu vehículo." />

      <Footer />
    </div>
  );
}

export default App;
