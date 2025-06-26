import './App.css'
import { RandomNumbers } from './components/RandomNumbers';
import { useRandom } from './hooks/useRandom';


//https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new




function App() {

 const { randomQuery } = useRandom();

  return (
    <>
      {randomQuery.isFetching ?
        <h4>Cargando...</h4>
        :
        <h1>Numero: {randomQuery.data}</h1>
      }
      <RandomNumbers/>
      <div>{randomQuery.error ? JSON.stringify(randomQuery.error) : "No hay errores."}</div>
      <button
        disabled={randomQuery.isFetching}
        onClick={() => randomQuery.refetch()}
      >Cargar otro numero</button>
    </>
  )
}

export default App
