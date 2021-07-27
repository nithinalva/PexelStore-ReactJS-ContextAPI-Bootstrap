import React, { useContext } from 'react'
import { Container } from 'reactstrap'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Cart from './Cart'
import CartContext from '../context/CartContext'
import { Button,Row,Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const BIlling = () => {
     const{cart}=useContext(CartContext)
     
   const sumOFnumbeer=cart.reduce((a,b)=>a+b.price,20)
   console.log(sumOFnumbeer)
    return (
        <div>
           
           <Container fluid className="shadow-sm" style={{width:"100%",backgroundColor:"#ffff",marginTop:"12px",color:"#000"}}>
                <h2><span className="mx-2"><AiOutlineShoppingCart/></span>Cart</h2>
           </Container>

           <Container fluid className="shadow-sm" style={{width:"100%",backgroundColor:"#ffff",marginTop:"12px",height:"600px"}}>
         
                <div  className="shadow-sm text-dark">
                <h3>Your items({cart.length})</h3>

                </div>
                {cart.length>0?<Cart />: <img src="https://www.tyjara.com/assets/site/img/empty-cart.png" style={{height:"590px",width:"390px",objectFit:"contain"}}></img>}
                
               
           </Container>

           <Container fluid className="shadow-sm" style={{width:"100%",backgroundColor:"#ffff",marginTop:"12px",height:"190px",padding:"1rem"}}>
                
               <p className="text-dark">Additional Charges-20rs</p>
              
                <h2 className="text-dark"><u>Grand total: {sumOFnumbeer}.00Rs</u></h2>
               
              
                   
               {/* <div style={{width:"100%"}}>
      <Button size="lg" type="submit" className="btn-block btn my-button"block>Proceed to checkout</Button>
               </div> */}
               
                
               <button type="submit" class="text-white btn-lg my-button w-100">procedd to Checkout</button>
           </Container>
        </div>
    )
}

export default BIlling
