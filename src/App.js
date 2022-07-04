import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton.jsx';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [numClicks, setnumClicks] = useState(0);

  const contadorClic = () => {
    setnumClicks(numClicks + 1);
  };
  const botonReinicio = () => {
    setnumClicks(0)
  };
  return (
    <div className='App'>
      <img className = 'Logo' src = { logo } alt = 'logo'/>
      <Contador numContador = { numClicks }/>
      <Boton 
        texto= 'Click'
        esContadordeClic= { true }
        onclick= {contadorClic}/>
      <Boton 
        texto= 'Reiniciar'
        esContadordeClic= { false }
        onclick= {botonReinicio}/>
    </div>
  );
}

export default App;
