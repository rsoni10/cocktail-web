import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const initialState ={
cocktails:[],
cocktail:[],
error:null,
status:null,
loading:false
}

export const fetchCocktails = createAsyncThunk(
    "cocktail/fetchCocktails",
    async()=>{
     return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
     .then((response)=>response.json())
     
    }
)

export const getCocktailDeatils = createAsyncThunk(
    "cocktail/getCocktailDeatils",
    async(id)=>{
        console.log(id,"id id ");
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response)=>response.json())
    }
)

export const fetchSearchCocktails = createAsyncThunk(
    "cocktail/fetchSearchCocktails",
    async(searchText)=>{
        console.log(`"searchText inn slice", https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`);
        return fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
            ).then((response)=>response.json() )
    }
)
const CocktailSlice = createSlice({
    name:"cocktail",
    initialState,
    extraReducers:{
    [fetchCocktails.pending]:(state ,{payload})=>{
        state.status = "pending" 
        state.loading = true
    },
    [fetchCocktails.fulfilled]:(state ,{payload})=>{
       state.loading =false
        state.cocktails = payload
        state.status = "fulfilled" 
    },
    [fetchCocktails.rejected]:(state ,{payload})=>{
        state.status = "rejected" 
        state.error = payload
    },

    [getCocktailDeatils.pending]:(state ,{payload})=>{
        state.status = "pending" 
        state.loading = true
    },
    [getCocktailDeatils.fulfilled]:(state ,{payload})=>{
       state.loading =false
        state.cocktail = payload
        state.status = "fulfilled" 
    },
    [getCocktailDeatils.rejected]:(state ,{payload})=>{
        state.status = "rejected" 
        state.error = payload
    },


    [fetchSearchCocktails.pending]:(state ,{payload})=>{
        state.status = "pending" 
        state.loading = true
    },
    [fetchSearchCocktails.fulfilled]:(state ,{payload})=>{
        console.log("payload payload",payload)
        state.loading =false
        state.cocktails = payload
        state.status = "fulfilled" 
    },
    [fetchSearchCocktails.rejected]:(state ,{payload})=>{
        state.status = "rejected" 
        state.error = payload
    },


    }
})

export default CocktailSlice.reducer