import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    clickedProduct: null,
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        //FOR PRODUCTS
        setProducts(state, action){
            state.products = action.payload
        }
    },
})

export const {setProducts} = productSlice.actions;
export default productSlice.reducer