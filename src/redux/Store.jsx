import { configureStore } from "@reduxjs/toolkit";
import productSlice from './ProductSlice'
import cartSlice from './CartSlice'
import favouritesSlice from './FavouriteSlice'

const store = configureStore({
    reducer:{
        product:productSlice,
        cart: cartSlice,
        favourites: favouritesSlice
    }
})


export default store;