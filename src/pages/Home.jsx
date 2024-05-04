import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import useFetch from '../Hooks/useFetch'; 
import { useDispatch } from 'react-redux';
import { addWishlistItem } from '../redux/slices/wishlistSlice';
import { addCartItem } from '../redux/slices/cartSlice';

function Home() {
 const dispatch = useDispatch()

 const data =useFetch('https://fakestoreapi.com/products')
 console.log(data);

  return (
    <>
      <Row className='ms-5 me-3 mt-5' >
       {data?.length>0?
       data?.map((product)=>(<Col className='mb-2 p-4 mt-5' sm={12} md={6} lg={4} xl={3} >
       <Card style={{ width: '18rem' }} className=' shadow'>
         <Card.Img variant="top" src={product.image} style={{width:'100%',height:'250px'}} className='p-3' />
         <Card.Body>
           <Card.Title>{product.title.slice(0,22)}</Card.Title>
           <Card.Text>
             <p>{product.description.slice(0,50)}</p>
             <p className='fw-bolder'>Price:₹{product.price}</p>
           </Card.Text>
           <div className='d-flex justify-content-between'>
             <Button onClick={()=>dispatch(addWishlistItem(product))} variant="outline-danger" ><FontAwesomeIcon icon={faHeart} /></Button>
             <Button onClick={()=>dispatch(addCartItem(product))} variant="outline-success" ><FontAwesomeIcon icon={faCartPlus} /></Button>
           </div>
         </Card.Body>
       </Card>
     </Col>))
        

        
       

         : <p>nothing to show</p>}
      </Row>
    </>
  )
}

export default Home