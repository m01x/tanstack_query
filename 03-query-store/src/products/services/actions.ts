
// Las acciones con las que me comunicaré con la API
// * Utilizamos axios, recordar!

import { type Product, productsApi } from "../";

interface GetProductsOptions {
    filterKey?: string;
}

export const getProduct = async( {  filterKey }:GetProductsOptions ) => {
  
    const { data } = await productsApi.get<Product[]>('/products');

    return data;
}