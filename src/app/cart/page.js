"use client"

import { useContext } from "react";
import { CartContext } from "@/context/AppProvider";
import Image from "next/image";

export default function PageCart() {
    const { cartProducts } = useContext(CartContext);
    return (
        <>
            <aside>
                <ul>
                    {cartProducts?.map((product) => (
                        <div key={product._id}>
                            <h1>{product.name}</h1>
                            <Image src={product.images} width={100} height={100} alt="Product" />
                            <h1>{product.price}</h1>
                            <h1>{product.description}</h1>
                            <h1>{product.categories}</h1>
                        </div>
                    ))}
                </ul>
            </aside>
        </>
    );
}