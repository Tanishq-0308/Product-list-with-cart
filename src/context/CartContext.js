import { createContext, useContext } from "react";

export const CartContext= createContext({
    addedProduct:[],
    add:()=>{},
    remove:()=>{},
    reset:()=>{}
});

export const CartContextProvider=CartContext.Provider;

export default function useCartStore(){
    return useContext(CartContext);
}