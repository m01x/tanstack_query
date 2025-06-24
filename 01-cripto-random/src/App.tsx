
import { useEffect, useState } from 'react';
import './App.css'


//https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

function App() {

  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshToken, setRefreshToken] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    
    setIsLoading(true);

    fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
    .then( (resp) => resp.json())
    .then( (data) => setNumber(data))
    .catch( error => setError(error))
    .finally( ()=> setIsLoading(false))
    
  }, [refreshToken]);
  

  return (
    <>
    {isLoading ? 
      <h4>Cargando...</h4>
    :
      <h1>Numero: {number}</h1>
    }
      <div>{error}</div>
      <button
      disabled={isLoading}
        onClick={() => setRefreshToken( refreshToken + 1 )}
      >Cargar otro numero</button>
    </>
  )
}

export default App
