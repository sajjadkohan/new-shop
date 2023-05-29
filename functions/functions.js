const isInCart = (state,id) => {
    if(state.selectedItems.find(item => item._id == id)){
        return true
    } else{
       return false
    }
}

const proPrice = (price) => {
    const newPrice = Number(price)
    const finalPrice = newPrice.toLocaleString("FA");
    return finalPrice;
}

export {isInCart,proPrice};