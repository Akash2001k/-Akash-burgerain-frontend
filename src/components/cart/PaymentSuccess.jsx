import React from 'react'
import '../../styles/paymentSuccess.scss'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
     <section className='paymentSuccess'>

        <main>
            <h1>Order Confirmed</h1>
            <p>Order Placed Successfully, You can check order status below</p>
            <Link to="/myorder">Check status</Link>
        </main>

    </section>
    )
}

export default PaymentSuccess