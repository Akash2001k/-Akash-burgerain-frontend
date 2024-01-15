import React from 'react'
import '../../styles/orderDetails.scss'

const OrderDetails = () => {
    return (
        <section className='orderDetails'>
            <main>
                <h1>Order Details</h1>
                <div>
                    <h1>Shipping</h1>
                    <p>
                        <b>Address</b>
                        {"201103 Tronica City"}
                    </p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>
                        <b>Name</b>
                        {"Akash"}
                    </p>
                    <p>
                        <b>Phone No.</b>
                        {"8810330925"}
                    </p>
                </div>
                <div>
                    <h1>Status</h1>
                    <p>
                        <b>Order Status</b>
                        {"Processing"}
                    </p>
                    <p>
                        <b>Placed At</b>
                        {"12-04-2023"}
                    </p>
                    <p>
                        <b>Delivered At</b>
                        {"14:42"}
                    </p>
                </div>
                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment Method</b>
                        {"POD"}
                    </p>
                    <p>
                        <b>Payment Reference</b>
                        {"EDS4422FG322"}
                    </p>
                    <p>
                        <b>Delivered At</b>
                        {"14:42"}
                    </p>
                    <p>
                        <b>Paid At</b>
                        {"14:42"}
                    </p>
                </div>
                <div>
                    <h1>Amount</h1>
                    <p>
                        <b>Sub Total</b>
                        ₹ {2000}
                    </p>
                    <p>
                        <b>Shipping Charges</b>
                        ₹ {240}
                    </p>
                    <p>
                        <b>GST</b>
                        ₹ {140}
                    </p>
                    <p>
                        <b>Grand Total</b>
                        ₹ {2380}
                    </p>

                </div>

                <article>
                    <h1>Ordered Items</h1>
                    <div>
                        <h4>Double Cheese Burgur</h4>
                        <div>
                            <span>{12}</span> x <span>{232}</span>
                        </div>
                    </div>

                    <div>
                        <h4>Veg Burgur with French Fries and Cold-drinks</h4>
                        <div>
                            <span>{12}</span> x <span>{232}</span>
                        </div>
                    </div>
                    <div>
                        <h4 >Vegitable Burgur</h4>
                        <div>
                            <span>{12}</span> x <span>{232}</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{fontWeight:800}}>Sub Total</h4>
                        <div style={{fontWeight:800}}>₹{2123}</div>
                    </div>
                </article>
            </main>
        </section>
    )
}

export default OrderDetails