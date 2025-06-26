import { useQuery } from "@tanstack/react-query";


const getCriptoNumber = async (): Promise<number> => {

  const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
    .then((resp) => resp.json())
  return Number(resp)

}

export const useRandom = () => {

    const randomQuery = useQuery({
    queryKey: ['randomNumber'], //Clave unica para identificar la consulta
    queryFn: getCriptoNumber, //funcion asincrona que ejecuta la solicitud y otras tareas
    staleTime: 1000*5, //vigencia o frescura del caché , 5 segundos
    refetchOnWindowFocus: false, //Condicion para refrescar el fetch al trabajar en otra ventana
    retry: false, //Al no obtener respuesta, podemos hacer intentos... false | cantidad de intentos
    //retryDelay: 3   Cantidad de retry antes de arrojar definitivamente un error.
  });


  return {
    randomQuery,
  }
}
