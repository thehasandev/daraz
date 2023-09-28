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
  }
})


export const { addtocart } = cartSlices.actions

export default cartSlices.reducer