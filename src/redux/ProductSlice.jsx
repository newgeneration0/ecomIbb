import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    clickedProduct: null,
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        //FOFR PRODUCTS
        setProducts(state, action){
            state.products = action.payload
        },

        //FOR GETTING MORE DETAILS WHEN PRODUCT IS CLICK
        clickProduct: (state, action) => {
            state.clickedProduct = action.payload;
        },
        clearClickedProduct: (state) => {
            state.clickedProduct = null;
        },
    },
})

export const {setProducts, clickProduct, clearClickedProduct} = productSlice.actions;
export default productSlice.reducer