import { useQueryClient } from "@tanstack/react-query"
import { productActions } from "..";


export const usePrefetchedProduct = () => {

    const queryClient = useQueryClient();

    const prefetchedProduct = ( id:number ) => {

        queryClient.prefetchQuery({
            queryKey: ["product", id],
            queryFn: () => productActions.getProductById(id)
        })
    }
  return prefetchedProduct
}
