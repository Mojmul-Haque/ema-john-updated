import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import AddProduct from './Components/AddProduct/AddProduct'
import Header from './Components/Header'
import Product from './Components/Product/Product'
import fakeData from './fakeData/index'

function App () {
  const [productdata, setProductdata] = useState([])
  useEffect(() => {
    setProductdata(fakeData)
  }, [])
  const [cart, setCart] = useState([])
  function handleAddProduct (product) {
    const cartProduct = [...cart, product]
    setCart(cartProduct)
  }

  return (
    <div>
      <Header></Header>
      <div className='container-fluid px-0 '>
        <div className='row mx-0'>
          <div className='col-lg-9'>
            <div className='row all-products border-right  border-primary'>
              {productdata.map(product => (
                <Product
                  product={product}
                  handleAddProduct={handleAddProduct}
                  key={product.key}
                ></Product>
              ))}
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='shoping-cart position-fixed'>
              {/* {cart.map( product => <AddProduct product={product}></AddProduct>)} */}
              <AddProduct product={cart} key={cart.key}></AddProduct>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
