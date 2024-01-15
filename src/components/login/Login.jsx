import React from 'react'
import '../../styles/login.scss'
import {motion} from 'framer-motion'
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
  return (
    <section className='login'>
       <motion.button initial={{y:"-100%",opacity:0}} whileInView={{y:0,opacity:1}}>
        Login with google
        <FcGoogle/>
       </motion.button>
    </section>
  )
}

export default Login