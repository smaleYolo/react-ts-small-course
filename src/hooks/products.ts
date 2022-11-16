import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    function addProduct(product: IProduct) {
        setProducts(prev => [product, ...prev])
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                setError('')
                const {data} = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
                setProducts(data)
            } catch (e: unknown) {
                const error = e as AxiosError;
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProducts()
    },[])

    return {products, isLoading, error, addProduct}
}