import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    favourites: [],
};

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addToFavourites:(state, action)=>{
            const product = action.payload;
            if(!state.favourites.find((item)=>item.id === product.id)){
                state.favourites.push(product)
            }
        },

        removeFromFavourites(state, action){
            state.favourites = state.favourites.filter(item => item.id !==action.payload)
        },
    }
})

export const {addToFavourites, removeFromFavourites} = favouritesSlice.actions;

export default favouritesSlice.reducer