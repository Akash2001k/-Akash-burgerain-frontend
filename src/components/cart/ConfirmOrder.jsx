import React from 'react'
import '../../styles/confirmOrder.scss'

const ConfirmOrder = () => {
    return (
        <section className='confirmOrder'>
            <main>
                <h1>Confirm Order</h1>
                <form>
                    <div>
                        <label>Pay on Delivery</label>
                        <input type="radio" name="payment" />
                    </div>
                    <div>
                        <label>Pay Online </label>
                        <input type="radio" name="payment" />
                    </div>
                    <button type="submit">Place Order</button>
                </form>
            </main>
        </section>
    )
}

export default ConfirmOrder