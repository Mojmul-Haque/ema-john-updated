import React from 'react'

const AddProduct = props => {
  const product = props.product
  let productPrice = product.reduce(
    (sum, productPrice) => sum + productPrice.price,
    0
  )
  let vat = productPrice / 10;
  let shipping =0;
  if(productPrice > 120){
    shipping = 0
  }
  else if(productPrice > 35) shipping = 5;
  else if(productPrice> 15) shipping = 8
  let totalPrice = productPrice+vat;
  let grandTotal = totalPrice + shipping



  const fixedDecimelNumber =(price => price.toFixed(2))

  return (
    <div  style={{height: '100vh'}}>
      <h3>Product Add : {product.length}</h3>
      <h5>Proudct Price: ${fixedDecimelNumber(productPrice)}</h5>
      <h5>vat: ${fixedDecimelNumber(vat)}</h5>
      <h5>Shiping before Price: ${fixedDecimelNumber(totalPrice)}</h5>
      <h5>Shiping : ${fixedDecimelNumber(shipping)}</h5>
      <h5 className='border-top border-info'>Total Price ${fixedDecimelNumber(grandTotal)}</h5>
    </div>
  )
}

export default AddProduct
