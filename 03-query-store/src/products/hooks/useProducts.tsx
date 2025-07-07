import { useQuery } from "@tanstack/react-query";
import { productActions } from "..";

interface Options {
    filterKey?: string;

}

export const useProducts = ( { filterKey}: Options) => {
  
    const { isLoading, isError, error, data: products = [], isFetching } = useQuery({ 
        queryKey: ['products', { filterKey }],
        queryFn: () => productActions.getProduct( { filterKey } ),
            staleTime: 100 * 60 * 60
    });


    return {
        isLoading, 
        isError, 
        error, 
        products, 
        isFetching
    }
}
