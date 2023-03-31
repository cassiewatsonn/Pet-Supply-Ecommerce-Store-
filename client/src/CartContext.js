import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productStore";

export const CartContext = createContext({
        items: [],
        getProductQuantity: () => {},
        addOneToCart: () => {},
        removeOneFromCart: () => {},
        deleteFromCart: () => {},
        getTotalCost: () => {}
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    //[{id: 1, quantity: 2}]  is being stored in the cart

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity
        
        if ( quantity === undefined) {
            return 0;
        }
        return quantity;
    }

    function addOneToCart(id) {
        //looking to see if quantity is equal to zero
        const quantity = getProductQuantity(id);

        if (quantity === 0) { //product is not in cart 
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        }else {  //if product is in cart 
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                //if condition                      
                    ? { ...product, quantity: product.quantity + 1}  //if statement is true
                    : product                                        //if statement is false
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                //if condition                      
                    ? { ...product, quantity: product.quantity - 1}  //if statement is true
                    : product                                        //if statement is false
                )
            )
        }
    }

    function deleteFromCart(id) {
        //[] if an object meets a condition, then add the object to the array
        setCartProducts(
            cartProducts => 
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })  
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);

        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;
