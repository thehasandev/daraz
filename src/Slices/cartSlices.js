import { createSlice } from '@reduxjs/toolkit'

export const cartSlices = createSlice({
  name: 'cart',
  initialState: {
    cartitem: [],
  },

  reducers: {
    
    addtocart: (state,action) =>{

        if(state.cartitem.length>0){
        
            let arr=[]
            state.cartitem.map((item)=>{
               if(item.name==action.payload.name){
                item.quantity = item.quantity+1
                arr.push(item.name)
               }
            })
           
           if(arr.indexOf(action.payload.name)==-1){
            state.cartitem.push(action.payload)
           }
           
          
          }else{
            state.cartitem.push(action.payload)
           }
        },
    increment :(state,action)=>{
      state.cartitem.map((item)=>{
        if(item.name == action.payload.name){
          item.quantity++
        }
      })
    } ,   

    decrement :(state,action)=>{
     state.cartitem.map((item,index)=>{
        if(item.name == action.payload.name){
          if(item.quantity>1){
             item.quantity--
          }else{
            state.cartitem.splice(index,1)
          }
        }
      })
    }   ,
    removeCart : (state,action)=>{
      state.cartitem.map((item,index)=>{
        if(item.name == action.payload.name){
         state.cartitem.splice(index,1)
        }
      })
    }
  }
})


export const { addtocart,increment,decrement,removeCart } = cartSlices.actions

export default cartSlices.reducer