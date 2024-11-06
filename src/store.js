import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice(
    {
        name:'products', initialState:{
            veg:[
                {name:'Tomato',price:200},
                {name:'Potato',price:300},
                {name:'onion',price:100},
                {name:'cabage',price:50},
                {name:'green-chilly',price:30}
            ],
            nonveg:[
                {name:'Fish',price:400},
                {name:'Mutton',price:600},
                {name:'Chicken',price:200},
                {name:'Eggs',price:120}
            ]
        },
        reducers:{}
    }
)

const cartSlice = createSlice(
    {
        name:'cart',
        initialState:[],
        reducers:{
            addToCart:(state,action)=>{
                const status = state.find(item=>item.name===action.payload.name)
                if(status)
                {
                    status.quantity+=1
                }
                else{
                    state.push({...action.payload,quantity:1})
                }
            },
            increment:(state,action)=>{
                const status = state.find(item=>item.name===action.payload.name)
                if(status)
                {
                    status.quantity+=1
                }
            },
            decrement:(state,action)=>{
                const status = state.find(item=>item.name===action.payload.name)
                if(status&&status.quantity>1)
                {
                    status.quantity-=1
                }
                else{
                    return state.filter(item=>item.name!=action.payload.name)
                }
            },
            remove:(state,action)=>{
                return state.filter(item=>item.name!=action.payload.name)
            }
        }
    }
)
export const {addToCart,increment,decrement,remove} = cartSlice.actions

const store = configureStore(
    {
        reducer:
        {products:productSlice.reducer,
        cart:cartSlice.reducer,}
    }
)
export default store