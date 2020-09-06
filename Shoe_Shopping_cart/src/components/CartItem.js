import React from "react";
import {connect} from 'react-redux'
import {remove, increase, decrease} from '../redux/action'
const CartItem = ({ img, title, price, amount,removes,increases,decreases }) => {
  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-md-3">
        <img src={img} alt={title} className="image" style={{width:"100px" ,height:"100px"}} />
        </div>
        <div className="col-md-7">
        <div>
        <h4>{title}</h4>
        <h4 className="item-price">Rs {price}</h4>
        
        <button className="btn btn-outline-primary" onClick={()=>removes()}>remove</button>
       </div>
        </div>
        <div className="col-md-2">
        <div>
       
        <button className="btn btn-primary" onClick={()=>increases()}>
        <i class="material-icons" style={{fontSize:'25px',color:'white'}}>expand_less</i>
        </button>
       
        <p className=" pl-3 m-auto" style={{fontWeight:"bold",fontSize:'25px'}}>{amount}</p>
       
        <button className="btn btn-danger" onClick={()=>decreases()}>
        <i class="material-icons" style={{fontSize:'25px',color:'white'}}>expand_more</i>
        </button>
      </div>
        </div>
      </div>
     
     
     
    </div>
  );
};
const mapDispatchtoProps = (dispatch,ownProps) =>{
  //console.log(ownProps)
  const {id,amount} =ownProps
 // console.log(id)
  return{
    removes:()=>dispatch({type:remove,payload:{id}}),
    increases:()=>dispatch({type:increase,payload:{id}}),
    decreases:()=>dispatch({type:decrease,payload:{id,amount}})
  }
}
export default connect (null,mapDispatchtoProps)( CartItem);
