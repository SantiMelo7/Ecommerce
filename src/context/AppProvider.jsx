"use client";

import { SessionProvider } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function cartPrice(cartProduct) {
  let price = cartProduct.price;
  return price;
}

export default function AppProvider({ session, children }) {
  // estado de los products como array vacio
  const [cartProducts, setCartProducts] = useState([]);
  // si el tipo de window es diferente a undefines damos guardar en local sino nada
  const ls = typeof window !== "undefined" ? window.localStorage : null;

  // effect
  useEffect(() => {
    // si ls pasa, insertamos el cart al local
    if (ls && ls.getItem("cart")) {
      // damos el segundo estado el parse de ls de cart
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  // guardar en local storage
  function saveCartProducts(cartProducts) {
    // si hay ls
    if (ls) {
      // del cart, recojemos el json del primer estado
      ls.setItem("cart", JSON.stringify(cartProducts));
    }
  }

  // agregar carro, product
  function addToCart(product) {
    // segundo estado, damos un prev
    setCartProducts((prevCart) => {
      // la copia del producto
      const cartProducts = { ...product };
      // el nuevo product es la copia de lo que viene del carrito y el producto como tal
      const newProduct = [...prevCart, cartProducts];
      // damos el 2do estado, el nuevo producto
      saveCartProducts(newProduct);
      return newProduct;
    });
  }

  // remover
  function removeCart(indexRemove) {
    // segundo estado, damos un prev
    setCartProducts((prevCart) => {
      // el nuevo producto es que del prev, lo filtramos del index que si el index es diferente al remove de parametro
      const newCartProducts = prevCart.filter((index) => index !== indexRemove);
      // damos el segundo estado el nuevo cart
      saveCartProducts(newCartProducts);
      return newCartProducts;
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeCart,
      }}
    >
      <SessionProvider session={session}>{children}</SessionProvider>
    </CartContext.Provider>
  );
}
