import React from 'react'
import '../../styles/menu.scss'
import MenuCard from './MenuCard'
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'

const Menu = () => {

    const addToCartHandler = (itemNum) => {

    }

    return (
        <section id="menu">
            <h1>MENU</h1>
            <div>
                <div>
                    <MenuCard itemNum={1} delay={0.1} burgerSrc={burger1} price={200} title="Double Cheese Burger" handler={addToCartHandler} />
                </div>
                <div>
                    <MenuCard itemNum={2} delay={0.3} burgerSrc={burger2} price={480} title="Veg Burger with french fries and cold-drink" handler={addToCartHandler} />
                </div>
                <div>
                    <MenuCard itemNum={3} delay={0.5} burgerSrc={burger3} price={220} title="Vegitable Burger" handler={addToCartHandler} />
                </div>
            </div>
        </section>
    )
}

export default Menu