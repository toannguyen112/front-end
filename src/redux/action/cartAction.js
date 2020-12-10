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

export default {
    addCart,
    deleteAllCart

}