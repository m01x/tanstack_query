import axios from "axios";

const productsApi = axios.create({
    baseURL: 'http://localhost:3100',
});

/**
 * Siempre esta la opcion de exportarlo por defecto, pero haciendolo de esta manera
 * preparo mi app para soportar interceptores.
 * 
 * Asi me aseguro de que lo que se exporte aqui, ya tenga todo lo necesario y no antes de que se
 * instancie.
 */
export { productsApi };