import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import VideoPlayer from 'react-video-js-player';
import ProductCard from './ProductCard';


const Products = ({products,setproducts}) => {
    return (
        <div>
            <Container className="rounded shadow-sm"  style={{width:"100%",height:"800px",backgroundColor:"#fff",marginTop:"8px",maxHeight:"750px",overflowY:"scroll"}} >
               
            {products.length>0?<Row>
                    {products.map((prod,index)=>(

                <Col md={3}  style={{margin:"1.5rem"}}  key={index}>
                    <ProductCard id={prod.id} photos={prod.photos} price={prod.price}  description={prod.description} author={prod.author} wishlisted={prod.wishlisted} setproducts={setproducts} products={products}/>
                </Col>

                    ))}
                
            

                </Row>:<img src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif" style={{objectFit:"contain"}}></img>}
                
               
               
            </Container>
        </div>
    )
}

export default Products
