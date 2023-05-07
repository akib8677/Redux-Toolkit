import { useSelector, useDispatch } from "react-redux"
import { remove } from '../store/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const cartProduct = useSelector(state => state.cart)

  const removeProduct = (id) => {
    dispatch(remove(id))
  }

  return (
    <>
    <div className="container text-center mt-2">
      <h1>Cart</h1>
      <div className="row">

        {
          cartProduct && cartProduct.map((product) => {
            return (
              <div key={product.id} className="col-sm-3">
                <div className="card">
                  <img src={product.image} className="card-img-top" alt="img" height="300" />
                  <hr />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">INR: {product.price}</p>
                    <hr />
                    <a className="btn btn-danger" onClick={() => removeProduct(product.id)}>Remove Item</a>
                  </div>
                </div>
              </div>
            )
          })
        }
        {
          cartProduct.length === 0 && <div>There is no item in your bag.</div>
        }
      </div>
    </div>
  </>
  )
}

export default Cart