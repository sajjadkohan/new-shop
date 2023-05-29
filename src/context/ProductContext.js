'use client';
import { createContext, useState } from "react";

export const ProductContext = createContext();

const PrductWrapper = ({children}) => {

    const [activeProduct,setActiveProduct] = useState(null);

    const setProduct = (data) => {
        console.log(data);
        setActiveProduct(data);
    }

    return(
    <ProductContext.Provider value={{activeProduct,setProduct}}>
        {children}
    </ProductContext.Provider>
    )
}

export default PrductWrapper;
