import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice'
import { getProducts } from '../store/productSlice';
import StatusCode from '../utils/StatusCode';


const Product = () => {
  const {data: products, status} = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])


  if(status === StatusCode.LOADING) {
    return <p>Loading...</p>
  }

  if(status === StatusCode.ERROR) {
    return <p className='text-danger'>Something went wront. please try again later</p>
  }

  const addProduct = (product) => {
    dispatch(add(product))
  }

  return (
    <>
      <div className="container text-center mt-2">
        <h1>Product Dashboard</h1>
        <div className="row">

          {
            products && products.map((product) => {
              return (
                <div key={product.id} className="col-sm-3" >
                  <div className="card">
                    <img src={product.image} className="card-img-top" alt="img" height="300" />
                    <hr />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">INR: {product.price}</p>
                      <hr />
                      <a className="btn btn-primary" onClick={() => addProduct(product)}>Add To Cart</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Product