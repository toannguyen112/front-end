const addCart = (product) => {
    return {
        type: "ADD_CART",
        payload: product
    }
}

const deleteAllCart = () => {
    return {
        type: "DELETE_ALL_CART",
    }
}

const setCartCostomer = (listproduct) => {
    return {
        type: "SET_CART_COSTOMER",
        payload: listproduct
    }
}

export default {
    addCart,
    deleteAllCart,
    setCartCostomer

}