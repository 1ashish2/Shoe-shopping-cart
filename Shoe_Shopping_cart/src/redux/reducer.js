import cartItems from "../cart-items";
import {increase,decrease,remove,clear, total} from './action'
const initialState={
    cart:cartItems, 
    amount:3,
    total:105
 }
 


const reducer=(state=initialState,action)=>{
    if(action.type===decrease)
    {
      let tempCart=[]
      if(action.payload.amount === 1){
      return{
        ...state,
        cart:state.cart.filter((cartitem)=>cartitem.id !== action.payload.id)
      }
    }else{
      tempCart=state.cart.map(cartItem=>{
        
        if(cartItem.id === action.payload.id)
       
        {
          cartItem={...cartItem,amount:cartItem.amount - 1}
        }
      
        return cartItem;
      })}
      return {
        ...state,
        cart:tempCart
      }
    }
    if(action.type===increase)
    {
      let tempCart=state.cart.map(cartItem=>{
        if(cartItem.id === action.payload.id)
        {
          cartItem={...cartItem,amount:cartItem.amount +1}
        }
        return cartItem;
      })
      return {
        ...state,
        cart:tempCart
      }
     
    }
    if(action.type===remove)
    {
     // console.log(action.payload.id)
      return{
        ...state,
        cart:state.cart.filter((cartitem)=>cartitem.id !== action.payload.id)
      }
      // console.log(state)
    }
    if(action.type===clear)
    {
        
      return{
          ...state,
          cart:[]
      }
    }
    if(action.type === total)
    {
      //console.log("total")
      let{total,amount}=state.cart.reduce((cartTotal,cartItem)=>{
       // console.log(cartTotal)
       const {price,amount}=cartItem;
       cartTotal.amount += amount;
       cartTotal.total += amount * price;
       return cartTotal
      },{
        amount:0,
        total:0
      })
      total=parseFloat(total.toFixed(2))
      return {
        ...state,
        total,
        amount
      }
    }
    return state;
  }
  export default reducer; 