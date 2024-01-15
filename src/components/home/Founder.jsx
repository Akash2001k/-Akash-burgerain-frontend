import React from 'react'
import '../../styles/founder.scss'
import { motion } from 'framer-motion'
import me from '../../assets/me.jpg'

const Founder = () => {

    const options = {
        initial: { x: "-100%", opacity: 0 }, whileInView: { x: 0, opacity: 1 }
    }

    return (
        <motion.div className='founder' {...options}>
            <div>
                <img src={me} alt='Founder' height={200} width={200} />
                <h3>Akash Kaushik, Founder, CEO</h3>
                <p>Hey, This is Akash Kaushik, the founder of Akash Burgerian.<br />We always serve you as a guest since 2023</p>
            </div>

        </motion.div>
    )
}

export default Founder