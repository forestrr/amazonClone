import {createSlice} from "@reduxjs/toolkit"

const initialState={
    items:[],
}

export const basketSlice=createSlice({
    name:"basket",
    initialState,
    reducers:{
        addToBasket:(state,action)=>{
            state.items = [...state.items,action.payload]
        },
        removeFromBasket:(state,action)=>{
            const index =state.items.findIndex(basketItem=>basketItem.id === action.payload.id
                )
                let newBasket=[...state.items]
                if (index >=0){
                    // The item exist in the basket ...remove it
                    newBasket.splice(index ,1)
                }else{
                    console.warn(
                        `cant remove product(id:${action.payload.id})as it is not on the basket`
                    )
                }
                state.items=newBasket;
        },
    },
})
export const {addToBasket,removeFromBasket}=basketSlice.actions;
export const selectItems =(state) =>state.basket.items
export default basketSlice.reducer;