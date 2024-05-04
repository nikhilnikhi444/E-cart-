import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeCartItem } from '../redux/slices/cartSlice'
import { useEffect } from 'react'

function Cart() {
  const [total,setTotal] = useState(0)

  const dispatch = useDispatch()
  
  const navigate = useNavigate()

  const CartArray = useSelector((state)=>state.cartReducer)
  console.log(CartArray);

   const getTotal =()=>{
     if(CartArray.length>0){
    
      setTotal( CartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
     }
     else{
       setTotal(0)
     }
   }

   useEffect(()=>{
    getTotal()
   },[CartArray])

   const handleCheckout =()=>{
    alert('Order placed successfully')
    dispatch(emptyCart())
    navigate('/')
   }


  return (
    <>
    
     {CartArray?.length>0?
     <div className='row my-5'>
      <div className="col-md-1"></div>
      <div className="col-md-7 mt-5" style={{overflowX:'auto'}}>
        <table className='table shadow w-100 mt-5' >
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {CartArray?.map((item,index)=>( <tr>
              <td>{index+1}</td>
              <td>{item.title}</td>
              <td><img src={item.image} style={{width:'150px',height:'150px'}} alt="" /></td>
              <td>₹ {item.price}</td>
              <td><button  onClick={()=>dispatch(removeCartItem(item.id))} className='btn btn-outline-danger'><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>))
           }
          </tbody>
        </table>
      </div>
      <div className="col-md-3 mt-5">
        <div className='shadow p-4 mt-5'>
           <h1 className='text-primary mb-3'>Cart Summary</h1>
           <h3>Total Number of Product: <span className='text-warning'> {CartArray.length}</span></h3>
           <h3>Total Price:<span className='text-warning'> ₹ {total}</span></h3>
           <button onClick={handleCheckout}  className='btn btn-success mt-4 mb-3 w-100 shadow'>Check Out</button>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>


     : <div className='d-flex justify-content-center align-items-center w-100 my-5'>
          <div className="col-md-4"></div>
          <div className='col-md-4 d-flex justify-content-center align-items-center flex-column '>
            <img src="https://zoe.menu/assets/images/empty_cart.gif" className='w-100 mt-5' alt="empty" />
           <Link to={'/'}> <button className='btn btn-success p-3 mt-3'><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Home</button></Link>
          </div>
          <div className="col-md-4"></div>
        </div>} 

        
    </>
  )
}

export default Cart