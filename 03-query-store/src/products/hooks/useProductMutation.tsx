import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Product, productActions } from '..';

export const useProductMutation = () => {

  const queryclient = useQueryClient();

  const mutation = useMutation({
      mutationFn: productActions.createProduct,

      onSuccess: (product) => {

        //Invalidar query marca una query fresca, como invalida, para que vuelva a cargarse nuevamente (no usar el cache)
        // console.log('Producto creado. Invalidando query');
        // queryclient.invalidateQueries({
        //   queryKey:['products',{ 'filterKey':data.category }]
        // });


        //Esto agrega "product" a la data que teniamos, para evitar hacer un query entero...
        queryclient.setQueryData<Product[]>(
          ['product', { filterKey: product.category}],
          (old) => {
            if ( !old ) return [product];

            return [...old, product]
          }
        );



      }
    });

    return mutation;
}
