'use client';
import React, { createContext, useEffect, useReducer, useState } from 'react'

const intialState = {
    selectedItems : [],
    total : NaN,
    checkOut : false
}

const cartReducer = (state,action) => {
    switch(action.type) {
        case "ADD_ORDER" : 
        if(!state.selectedItems.find(item => item._id === action.payload._id)) {
            state.selectedItems.push({
                ...action.payload,
                quantity : 1
            })
        }
        localStorage.setItem("product",JSON.stringify(state.selectedItems))
        return {
            ...state,
            selectedItems : [...state.selectedItems]
        }

        case "REMOVE_ORDER" :
            const newSelectedItems = state.selectedItems.filter(item => item._id !== action.payload._id);
            localStorage.setItem("product",JSON.stringify(newSelectedItems))
            return {
                ...state,
                selectedItems : newSelectedItems
        }

        case "INCREASE" :
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity++
            // indexI&& console.log(indexI);
            return{
                ...state
        }

        case "CLEAR_ALL" :
                
                localStorage.removeItem("product")
                return {
                    selectedItems : [],
                    total : NaN,
                    checkOut : false
        }

        default : return state

    }
}



export const CartContext = createContext();

const CartCtx = ({children}) => {

    const [cart,setCart] = useState([]);
  const [state, dispatch] = useReducer(cartReducer,intialState);

  useEffect(()=> {
    // console.log(" 1 2 3 4 5 6 7 8 9 10");
    // در اینجا درخواست زده میشود به getByUser
  },[])

  return (
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartCtx
