import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <h1 className="checkout-title">
            Order Total:
            <span className="checkout-rupees"> Rs.{total}</span>
          </h1>
          <p className="checkout-items">{cartList.length} Items in cart</p>
          <button className="checkout-btn">Checkout</button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
