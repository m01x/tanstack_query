import { useQuery } from "@tanstack/react-query";


const getCriptoNumber = async (): Promise<number> => {

  const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
    .then((resp) => resp.json())
  return Number(resp)

}

export const RandomNumbers = () => {

    const { 
    data, 
  } = useQuery({
    queryKey: ['randomNumber'], //Clave unica para identificar la consulta
    queryFn: getCriptoNumber, //funcion asincrona que ejecuta la solicitud y otras tareas
    staleTime: 1000*5 //vigencia o frescura del caché
  });


  return (
    <div>RandomNumbers Component: {data}</div>
  )
}
