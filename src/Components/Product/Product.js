import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Product = props => {
  const { img, name, price, stock, star } = props.product
  const handleAddProduct = props.handleAddProduct
  const reviewStar = []
  for (let i = 0; i < star; i++) {
    reviewStar.push(i)
  }
  return (
    <div className='col-lg-4 mb-5'>
      <div className='card' style={{ height: '600px' }}>
        <img
          src={img}
          className='card-img-top img-fluid'
          styles={{ height: '' }}
          alt={img}
        />
        <div className='card-body'>
          <h6 className='card-title'>{name} </h6>
          <h6 className="d-flex text-warning">
          {reviewStar.map((a,i) => (
            <FontAwesomeIcon icon={faStar} key={i}></FontAwesomeIcon>
             ))}
             </h6>
          <h5>Price : ${price}</h5>
          <h6>
            <small>only {stock} left in stock - order soon</small>
          </h6>
          <button
            onClick={() => handleAddProduct(props.product)}
            className='btn btn-primary'
          >
            {' '}
            Go somewhere
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
