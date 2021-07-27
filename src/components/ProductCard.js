
import React, { useContext, useState } from 'react'
import { Card, CardBody, CardText, CardTitle ,Button} from 'reactstrap'
import { ADD_TO_CART, ADD_TO_WISHLIST } from '../context/actions.type'
import CartContext from '../context/CartContext'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import WishlistContext from '../context/WishlistContext'


const ProductCard = ({photos,price,description,author}) => {
    const{dispatch}=useContext(CartContext)
    const{dispatch1}=useContext(WishlistContext)
    
    const[wishlist,setWishlist]=useState(false);
   

    const addTOCartHandler=()=>{
        const product={
            price,
            photos,
            description,
            author
        }

        dispatch({
            type:ADD_TO_CART,
            payload:product
        })
    }


// const addTowishList=()=>{
//     const products={
//         price,
//         photos,
//         description,
//         author
//     }
//   dispatch1({
//       type:ADD_TO_WISHLIST,
//       payload:products
//   })
// }

    return (
        <div>
            <Card style={{width:"230px"}}>
                <CardBody>
                    <CardTitle>
                        
                    </CardTitle>
                    <img src={photos} style={{height:"200px",width:"100%",objectFit:"cover"}} >
                    </img>

                    <CardText >
                        <p className="text-dark">-{author}</p>
                        <h7 className="text-dark"><del>{price+2560}.00</del> Rs</h7>
                        <h6 className="text-dark">{price}.00 Rs</h6>
                    <span className="text-secondary desc">{description}</span>
                    </CardText>
                    <span>{wishlist?<AiFillHeart />:<AiOutlineHeart onClick={()=>{setWishlist(true)}}/>}</span>
                        <Button className=" btn-sm my-button" style={{float:"right"}}  onClick={()=>addTOCartHandler()}>Add to cart</Button>
                </CardBody>
            </Card>
            
        </div>
    )
}

export default ProductCard
