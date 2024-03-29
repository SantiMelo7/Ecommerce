import { useEffect } from "react";
import { useState } from "react";

export default function useUpdatedProduct(product) {

    // recojemos el state del product como objeto vacio
    const [updatedProduct, setUpdatedProduct] = useState({});

    // efecto
    useEffect(() => {
        // osea que muestre la copia por cada renderizacion
        // actualizamos el segundo estado y damos como arreglo la copia del producto
        setUpdatedProduct({ ...product })
        // damos como dependencia el product, porque cada que el producto se de, tenemos que
        // hacer que el useEffect se renderize
    }, [product])

    // actualizar
    // recibe como argumento la key y el value
    const handleUpdate = (name, value) => {
        setUpdatedProduct(prevProduct => ({
            ...prevProduct, [name]: value
        }))
    }

    return { handleUpdate, updatedProduct }
}