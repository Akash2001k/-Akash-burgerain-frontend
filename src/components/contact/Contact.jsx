import React from 'react'
import '../../styles/contact.scss'
import { motion } from 'framer-motion'
import '../../styles/contact.scss'
import { BiSolidMessageRoundedCheck } from 'react-icons/bi';

const Contact = () => {
    return (
        <section className='contact'>

            <motion.form initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}}>
                <h2>Contact Us</h2>

                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />

                <textarea placeholder='Message...' cols="30" rows="10"></textarea>
                <button type='submit'>Send</button>
            </motion.form>

            <motion.div className='formBorder' initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}}>
               <BiSolidMessageRoundedCheck/>
            </motion.div>

        </section>
    )
}

export default Contact