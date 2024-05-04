import { createSlice } from "@reduxjs/toolkit"



const whishlistSlice = createSlice({
    name: 'whishlist',
    initialState:[],
    reducers:{
        // actions
        //1) to add items to whishlist
        
         addWishlistItem:(state,actions)=>{
            state.push(actions.payload)
         },

        //2)to remove items from whishlist
        removeWishlistItem:(state,actions)=>{
          return state.filter((item)=>item.id!=actions.payload)
        }
    }   
})
export const {addWishlistItem,removeWishlistItem} =whishlistSlice.actions


export default whishlistSlice.reducer;