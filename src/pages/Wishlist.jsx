import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItem } from '../redux/slices/wishlistSlice';

import { addCartItem } from '../redux/slices/cartSlice';

function Wishlist() {
  const WishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(WishlistArray);
  const dispatch = useDispatch()

  const handleAdd = (product) => {
    dispatch(addCartItem(product))
    dispatch(removeWishlistItem(product.id))
  }

  return (
    <>
    <Row className='ms-5 me-3 mt-5 ' >
        {WishlistArray?.length>0?
        WishlistArray?.map((product)=>(<Col className='mb-5 p-4 mt-5' sm={12} md={6} lg={4} xl={3} >
        <Card style={{ width: '18rem' }} className=' shadow'>
          <Card.Img variant="top" src={product.image} style={{width:'100%',height:'250px'}} className='p-3' />
          <Card.Body>
            <Card.Title>{product.title.slice(0,22)}</Card.Title>
            <Card.Text>
             <p>{product.description.slice(0,50)}</p>
             <p className='fw-bolder'>Price:₹{product.price}</p>
            </Card.Text>
            <div className='d-flex justify-content-between'>
              <Button onClick={()=>dispatch(removeWishlistItem(product.id))} variant="outline-danger" ><FontAwesomeIcon icon={faTrash} style={{color: "#ef2525",}} /></Button>
              <Button onClick={()=>handleAdd(product)} variant="outline-success" ><FontAwesomeIcon icon={faCartPlus} /></Button>
              </div>
          </Card.Body>
        </Card>
        </Col>))
        
       
         :<div className='d-flex justify-content-center align-items-center w-100 my-5'>
          <div className="col-md-4"></div>
          <div className='col-md-4 d-flex justify-content-center align-items-center flex-column '>
            <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" className='w-100' alt="empty" />
            <h4 className='text-danger mt-4'>Your wishlist is Empty</h4>
           <Link to={'/'}> <button className='btn btn-success p-3 mt-3'><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Home</button></Link>
          </div>
          <div className="col-md-4"></div>
        </div>}  

      </Row></>
  )
}

export default Wishlist