import React,{useEffect} from "react";
import CartItem from "./CartItem";
import {connect} from 'react-redux'
import {clear,total} from '../redux/action'
const CartContainer = ({ cart = [],totals,dispatch}) => {
  useEffect(()=>{
    dispatch({type:total})
  })
  if (cart.length === 0) { 
    return (
      <section className="cart">
       
        <header>
          <h2 className="mt-4">your cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
 
  return (
    <section className="cart">
     
      <header>
        <h2 className="mt-4">your cart</h2>
      </header>
     
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
     
      <footer>
        <hr />
        <div className="container ">
          <div className="row">
            
            <div className="col-md-9 text-right "> 
            <h4 style={{fontWeight:"bold",fontSize:"20px"}}>
             total price 
          </h4>
            </div>
            <div className="col-md-3 text-center"> 
            <h4 style={{fontWeight:"bold",fontSize:"15px"}}>Rs {totals}</h4>
            </div>
          </div>
          
        </div>
        <button className="btn btn-danger mb-4" onClick={()=>dispatch({type:clear})}>clear cart</button>
      </footer>
    </section>
  );
};
const mapStatetoProps= store =>{
  const{cart,total}=store
 // console.log(store)
  return {cart,totals:total}
  
}
export default connect(mapStatetoProps) (CartContainer);
