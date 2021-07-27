import React,{useContext} from 'react'
import { Container, Row,Col,Button, InputGroup, Input, InputGroupAddon, Form, FormGroup } from 'reactstrap'
import BIlling from './BIlling'
import Products from './Products'
import { useState,useEffect } from 'react'
import axios from 'axios'
import faker from  'faker'
import {FaSearch}  from 'react-icons/fa'
import WishlistContext from '../context/CartContext'
import { v4 } from 'uuid'

const Body = () => {

    const[products,setproducts]=useState([])

    const[search,setsearch]=useState("")
    const{wishlist}=useContext(WishlistContext)


    const fetchDetails=async(prod)=>{

        const  response=await axios.get("https://api.pexels.com/v1/search?",{
            headers:{
                "Authorization":"563492ad6f91700001000001636a430333da4d6887bd829992d484f1"
            },
            params:{
                query:prod
                
            }
        })
        // setproducts(response.data.photos)
        // // console.log(response.data.photos);

        const shoppingProducts=response.data.photos.map((prod,index)=>(
            
            
            {
            id:v4(),
            photos:prod.src?.large,
            price:parseInt(faker.commerce.price()),
            description:faker.commerce.productDescription(),
            author:prod.photographer,
            wishlisted:false
        }))

        // console.log("prod",shoppingProducts);
    
        shoppingProducts.map((pr)=>{

         
            if(!wishlist.some(prod=>prod.id==pr.id)){
                
                console.log("z",prod);
            }
        })


        setproducts(shoppingProducts)
        
    }

   

    const loadFromWishlist=()=>{

        setproducts(wishlist)
    }




    useEffect(() => {
        
        fetchDetails("love")

    }, [])



    const searchHandler=(value)=>{

      
      fetchDetails(value)
     

    }

    return (
        <div>
             <Container  className="text-primary  ">
                
                {/* <h1 className="mr-auto">hii</h1> */}

                <Row>

                    
                    <Col lg="8" >
                                 <Container fluid style={{padding:"10px"}}>

                                    <Container style={{background:"#fff"}} className="rounded shadow-sm p-2 mx-auto">     
                                    <Button className="mx-2 rounded-4 btn-light  options-button btn-sm shadow-lg btn-outline-secondary"  style={{borderRadius:"15%",}} onClick={()=>loadFromWishlist()}>Your wishlists({wishlist.length})</Button>

                                    <Button className="mx-2 rounded-4 btn-light  options-button btn-sm shadow-lg btn-outline-secondary"  style={{borderRadius:"15%"}} onClick={()=>{fetchDetails("laptop")}}>laptops</Button>
                                      
                                    <Button className="mx-2 rounded-4 btn-light  options-button btn-sm shadow-lg btn-outline-secondary"  style={{borderRadius:"15%"}} onClick={()=>{fetchDetails("mobiles")}}>mobiles</Button>
                                      
                                    <Button className="mx-2 rounded-4 btn-light  options-button btn-sm shadow-lg btn-outline-secondary"  style={{borderRadius:"15%"}} onClick={()=>{fetchDetails("kitchen")}}>kitchen</Button>
                                      

                                    <Button className="mx-2 rounded-4 btn-light  options-button btn-sm shadow-lg btn-outline-secondary"  style={{borderRadius:"15%"}} onClick={()=>{fetchDetails("outfits")}}>outfits</Button>
                                      
                                    <Button className="mx-2 rounded-4 btn-light  options-button btn-sm shadow-lg btn-outline-secondary"  style={{borderRadius:"15%"}} onClick={()=>{fetchDetails("electronics")}}>Electronics</Button>

                                     <Form>
                                         <FormGroup  >
                                         <InputGroup className="my-2">
                                    
                                    <Input placeholder="Search items" onChange={e=>setsearch(e.target.value)}/>
        <InputGroupAddon addonType="prepend"><Button color="bt-dark" className="btn btn-outline-dark" onClick={()=>searchHandler(search)}  ><span className="mx-2"><FaSearch/></span>SEARCH</Button></InputGroupAddon>
     
                                    
                                    </InputGroup>
                                      
                                         </FormGroup>
                                         </Form> 
                                   
                                    

                                      
                                    </Container>
                                        <Products products={products}  setproducts={setproducts}/>
                                </Container>



                    </Col>
                       
                                <Col lg="4">
                                   
                                    <BIlling/>

                                
                                 </Col>
                </Row>
              </Container>
        </div>
    )
}

export default Body
