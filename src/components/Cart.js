import React, { useContext } from 'react'
import { Row,Card,Col, Container, Button } from 'reactstrap'
import CartContext from '../context/CartContext'
import {RiDeleteBin5Line} from  'react-icons/ri'
import { REMOVE_FROM_CART } from '../context/actions.type'

const Cart = () => {
    const{cart,cartdispatch}=useContext(CartContext)

    
    
    return (
        <Container style={{marginBottom:"2px"}} className="cart" >
            <Row>
                {cart.map((product,index)=>(
                    <Card  style={{marginBottom:"2px"}} key={index}>
                    <Row>
                        <Col lg="4">
                            <img src={product.photos} style={{height:"90px" ,width:"100%",objectFit:"cover"}}/>
                        </Col>
                        <Col lg="5">
                        <p  className=" text-dark desc">{product.description}</p>
                        <p className="text-dark"><strong>{product.price}.00 Rs</strong></p>
                        </Col>
                        <Col lg="3">
                        <Button className="btn-sm my-4 bg-white" style={{color:"#000"}} onClick={()=>{cartdispatch({
                            type:REMOVE_FROM_CART,
                            payload:product.basketId
                        })}}><RiDeleteBin5Line/></Button>
                        </Col>

                    </Row>
                </Card>


                ))}
               


            </Row>
        </Container>
    )
}

export default Cart
