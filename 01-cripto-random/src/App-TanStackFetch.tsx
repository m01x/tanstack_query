import './App.css'
import { useQuery } from '@tanstack/react-query';
import { RandomNumbers } from './components/RandomNumbers';


//https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new


const getCriptoNumber = async (): Promise<number> => {

  const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
    .then((resp) => resp.json())
  return Number(resp)

}

function App() {

  const { 
    isLoading,  //Flag de la PRIMERA carga fetch
    data: number, // Resultado de la consulta, lo renombramos a number
    error, //JSON que trae info de errores, null si no hay.
    refetch, //flag de cualquier resolución fetch (nuevo o desde cache)
    isFetching 
  } = useQuery({
    queryKey: ['randomNumber'], //Clave unica para identificar la consulta
    queryFn: getCriptoNumber, //funcion asincrona que ejecuta la solicitud y otras tareas
    staleTime: 1000*5, //vigencia o frescura del caché , 5 segundos
    refetchOnWindowFocus: false, //Condicion para refrescar el fetch al trabajar en otra ventana
    retry: false, //Al no obtener respuesta, podemos hacer intentos... false | cantidad de intentos
    //retryDelay: 3   Cantidad de retry antes de arrojar definitivamente un error.
  });


  return (
    <>
      {isFetching ?
        <h4>Cargando...</h4>
        :
        <h1>Numero: {number}</h1>
      }
      <RandomNumbers/>
      <div>{error ? JSON.stringify(error) : "No hay errores."}</div>
      <button
        disabled={isLoading}
        onClick={() => refetch()}
      >Cargar otro numero</button>
    </>
  )
}

export default App
