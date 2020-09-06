import React from "react";
import {connect} from 'react-redux'
const Navbar = ({amount}) => {
 
  return (
    <nav>
      <div className="nav-center">
        <h3>Nike store</h3>
        <div className="nav-container">
        <i class="material-icons" style={{fontSize:'40px',color:'white'}}>shopping_cart</i>
          <div className="amount-container">
           <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStatetoProps= store =>{
  const{amount}=store
 // console.log(store)
  return {amount}
  
}
export default connect(mapStatetoProps) (Navbar);
