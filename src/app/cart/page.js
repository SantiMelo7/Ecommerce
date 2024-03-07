"use client"

import { useCart } from "../../hooks-reducer/cart";
import MenuItemProps from "@/components/page/products/MenuItemProps";

export default function PageCart() {
    const { cart, addToCart } = useCart();
    console.log(cart)
    return (
        <>
            <aside>
                <ul>
                    {/*mapeamos lo del cart */}
                    {cart.map((product) => (
                        // damos el componente donde tenemos todo lo que se va a ver en el carrito
                        <MenuItemProps addToCard={() => addToCart(product)} {...product} />
                    ))}
                </ul>
            </aside>
        </>
    );
}