import React from 'react'
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiLogIn } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import '../../styles/header.scss'
import brand from '../../assets/brand.png'
import {motion} from 'framer-motion'

const Header = ({ isAuthenticated = true }) => {
    return (
        <nav>
            <motion.div initial={{x:"-100%"}} whileInView={{x:0}}>
                <img alt='brand' src={brand}/>
                <h3 style={{margin:"0 4px",fontSize:"1.5rem",color:" rgb(156,0,60)"}}>Akash Burgerian</h3>
            </motion.div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
                <Link to='/cart'>
                    <FiShoppingCart />
                </Link>
                <Link to={isAuthenticated ? '/me' : 'login'}>
                    {isAuthenticated ? <FaUser /> : <FiLogIn />}
                </Link>
            </div>
        </nav>
    )
}

export default Header