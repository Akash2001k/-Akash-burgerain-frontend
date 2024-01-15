import React from 'react'
import '../../styles/about.scss'
import { Link } from 'react-router-dom'
import {RiFindReplaceLine} from 'react-icons/ri'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <section className='about'>
        <main>
            <motion.h1 initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.1}}>About Us</motion.h1>

            <motion.article initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.3}}>
                <h4>Akash Burgereian</h4>
                <p>Hundreds of flavors under one roof</p>
                <p>We always serve you as a guest since 2023, The good thing is that our customers always delighing with us<br/>
                Explore the various type of food and burgers. Click below to see the menu</p>

                <Link to='/'>
                    <RiFindReplaceLine/>
                </Link>
            </motion.article>

            <div>
                <article>
                    <motion.div initial={{x:"100%",opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.7}}>
                        <div className='for-img'/>
                        <h3>Akash Kaushik</h3>
                        <h2>Founder, CEO</h2>
                        <p>Akash Kaushik, The Founder and CEO of Akash Burgereian. Affiliated to Good Taste<br/>
                          The Company believes with their helping hands since 2023
                        </p>
                    </motion.div>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About