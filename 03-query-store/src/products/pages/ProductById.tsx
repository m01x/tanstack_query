import { useParams } from "react-router-dom"
import { useProduct } from "../hooks/useProduct"
import { ProductCard } from "../components/ProductCard";
import { useEffect } from "react";



export const ProductById = () => {

  const {id} = useParams();
  const { product, isLoading } = useProduct({ id: +id!});

  useEffect(()=>{
    //Para que cuando se monte este componente ( la pag de producto) haya un autoscroll al inicio
    window.scrollTo(0,0);
  },[])

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Producto: </h1>
      
      { isLoading && <p> Cargando...</p>}

      { product && (<ProductCard  product = {product} fullDescription={true} />)}
      

    </div>
  )
}