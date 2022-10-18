import { configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from './features/CocktailSlice'
const store = configureStore({
    reducer:{
        cocktailsData:cocktailsReducer
    }
})

export default store