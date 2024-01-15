import React from 'react'
import '../../styles/cart.scss'
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CartItem = ({ value, title, img, increment, decrement }) => 
  (<div className="cartItem">
    <div>
    <img src={img} alt='Item' />
      <h4>{title}</h4>
      
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
  )


const Cart = () => {

  const increment = (item) => {

  }

  const decrement = (item) => {

  }

  return (
    <motion.section initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}} className='cart'>
      <main>
        <CartItem
          title={"Double Cheese Burger"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Veg Burger with French Fries and Cold-drink"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Vegitable Burger"}
          img={burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹ {1200}</p>
          </div>
          <div>
            <h4>GST</h4>
            <p>₹ {1200*(18/100)}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹ {200}</p>
          </div>
          <div>
            <h4>Grand Total</h4>
            <p>₹ {1200 + 1200*(18/100) + 200}</p>
          </div>
          <Link to='/shipping'>Checkout</Link>
        </article>
      </main>
    </motion.section>
  )
}

export default Cart