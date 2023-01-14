import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log('Total ' + contar);
  }, [contar]);

  const encenderApagar = () => {
    setStateCar(!stateCar);
    setContar(() => {
      console.log(contar); // aqui es sincrono
      return contar + 1;
    });
    console.log(contar); // El estado no es sincrono
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <h4>Clicks: {contar}</h4>

      <button onClick={encenderApagar}>Encender/Apagar</button>

      <h4>El coche esta: {stateCar ? 'Encendido' : 'Apagado'} </h4>
    </div>
  );
}

export default App;
