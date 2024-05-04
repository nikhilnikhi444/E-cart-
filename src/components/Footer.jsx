import { faFacebookF, faInstagram, faOpencart, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
   <div className='d-flex justify-content-center align-items-center w-100 bg-primary p-5 ' >
      <div className='row'>
        <div className="col-md-4 text-light">
          <h4 className='mb-3 text-light'  ><FontAwesomeIcon icon={faOpencart}  className='me-2' />E-CART</h4>
          <p style={{alignItems:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non ipsum pariatur voluptates eveniet dolorum ratione eum architecto, eligendi nulla magnam fugit nisi maiores deserunt provident voluptatibus earum obcaecati porro qui nam nostrum vitae? A quia accusamus quis voluptatibus ab soluta totam quod modi? Natus deleniti et sint esse qui!</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2 text-light">
          <h4 className='mb-3 text-light'>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}><p>Home</p></Link>
          <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}><p>Wishlist</p></Link>
          <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}><p>Cart</p></Link>
        </div>
        <div className="col-md-2 text-light">
          <h4 className='mb-3 text-light' >Guides</h4>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>Bootswatch</p>
        </div>
        
        <div className="col-md-3 text-light">
          <h4 className='mb-3 text-light'>Contact Us</h4>
          <div className='d-flex  '>
            <input type="text"  className='form-control w-100 me-2' placeholder='Enter Your email id' />
            <button className='btn btn-warning'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly mt-4'>
          <FontAwesomeIcon icon={faInstagram} size='2xl' />
          <FontAwesomeIcon icon={faXTwitter} size='2xl' />
          <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
          <FontAwesomeIcon icon={faFacebookF} size='2xl' />
          </div>
        </div>
         
      </div>
   </div>
    </>
  )
}

export default Footer