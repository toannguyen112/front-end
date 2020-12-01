const setProducts = (listProducts) => {
    return {
        type: "SET_PRODUCTS",
        payload: listProducts,
    };
};

const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product,
    };
};

const deleteProduct = (id) => {
    return {
        type: "DELETE_PRODUCT",
        payload: id,
    };
};

const deleteAllProducts = () => {
    return {
        type: "DELETE_ALL_PRODUCT",
    };
};

const updateProduct = (productUpdate) => {
    return {
        type: "UPDATE_PRODUCT",
        payload: productUpdate,
    };
};

export default {
    setProducts,
    addProduct,
    deleteProduct,
    updateProduct,
    deleteAllProducts,
};
