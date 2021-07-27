
import React, { useContext, useState } from 'react'
import { Card, CardBody, CardText, CardTitle ,Button} from 'reactstrap'
import { ADD_TO_CART, ADD_TO_WISHLIST,UPDATE_STATUS } from '../context/actions.type'
import CartContext from '../context/CartContext'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import WishlistContext from '../context/CartContext'
import { v4 } from 'uuid'



const ProductCard = ({photos,price,description,author,wishlisted,id,setproducts,products}) => {
    const{cartdispatch}=useContext(CartContext)
    const{wishlist,wishlistdispatch}=useContext(WishlistContext)

    // const[wishlist,setWishlist]=useState(false);
   

    const addTOCartHandler=()=>{
        const product={
            id,
            price,
            photos,
            description,
            author,
            wishlisted,
            basketId:v4()
        }

        cartdispatch({
            type:ADD_TO_CART,
            payload:product
        })
    }


const addTowishList=()=>{
    const products1={
        id,
        price,
        photos,
        description,
        author,
        wishlisted
    }
  wishlistdispatch({
      type:ADD_TO_WISHLIST,
      payload:products1
  })

//   wishlistdispatch({
      
//       type:UPDATE_STATUS,
//       payload:id

//   })
}




const wishlistChecker=(id)=>
{
// const index=products.findIndex(product=>product.id===id)
// console.log(index);


// setproducts([...products,products[index].wishlisted=true])

    const include=wishlist.some(pro=>pro.id===id)
console.log();
    return include
}


    return (
        <div>
            <Card style={{width:"230px"}}className="product-card">
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
                    
                    <span>{wishlistChecker(id)?<AiFillHeart />:<AiOutlineHeart onClick={()=>{addTowishList()}}/>}</span>
                        <Button className=" btn-sm my-button" style={{float:"right"}}  onClick={()=>addTOCartHandler()}>Add to cart</Button>
                </CardBody>
            </Card>
            
        </div>
    )
}

export default ProductCard
