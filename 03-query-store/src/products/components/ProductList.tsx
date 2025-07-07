import { type Product, ProductCard, usePrefetchedProduct } from ".."

interface Props {
  products : Product[];
}

export const ProductList = ( { products }: Props ) => {

  const prefetchProduct = usePrefetchedProduct()

  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 justify-center max-w-max">
      {
        products.map( producto => (
        
          <ProductCard 
            key={producto.id}
            product={ producto}
            prefetchProduct={ prefetchProduct}
          />
        ))
      }
      

    </div>
  )
}