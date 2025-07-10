
// Las acciones con las que me comunicaré con la API
// * Utilizamos axios, recordar!

import { type Product, productsApi } from "../";

interface GetProductsOptions {
    filterKey?: string;
}

const sleep = ( seconds: number = 0 ):Promise<boolean> => {

    return new Promise( resolve => {
        setTimeout( () => {
            resolve(true);
        }, seconds * 1000);
    });

}

export const getProduct = async( {  filterKey }:GetProductsOptions ):Promise<Product[]> => {
  
    const filterUrl = filterKey ? `category=${filterKey}` : '';
    await sleep(3);
    const { data } = await productsApi.get<Product[]>(`/products?${filterUrl}`);

    return data;
}

export const getProductById = async( id:number ):Promise<Product> => {
  
    const { data } = await productsApi.get<Product>(`/products/${id}`);

    return data;
}

export interface ProductLike {
    id?:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
}

export const createProduct = async(product:ProductLike) => {
    await sleep(2);

    const { data } = await productsApi.post<Product>(`/products`, product);
    return data;
}