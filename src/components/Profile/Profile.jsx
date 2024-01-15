import React from 'react'
import '../../styles/profile.scss'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { GrLogout } from 'react-icons/gr';
import { MdDashboardCustomize } from 'react-icons/md';
import { BiSolidNotepad } from 'react-icons/bi';

const Profile = () => {

    const options = {
        initial: { x: "-100%", opacity: 0 }, whileInView: { x: 0, opacity: 1 }
    }

  return (
    <section className='profile'>
        <motion.main {...options}>
            <img src="https://conferenceoeh.com/wp-content/uploads/profile-pic-dummy.png" alt="user"{...options}/>
            <h5 {...options} transition={{delay:0.3}}>
              Akash Kaushik
            </h5>
            <div {...options} transition={{delay:0.5}}>
               <Link to='/admin/dashboard'>Dashboard <MdDashboardCustomize/></Link>
            </div>

            <div {...options} transition={{delay:0.7}}>
               <Link to='/myorders'>Orders <BiSolidNotepad/></Link>
            </div>
            
            <button {...options} transition={{delay:0.9}}>Logout <GrLogout style={{fontSize:"16px",marginBottom:'-3px'}}/> </button>
        </motion.main>
    </section>
  )
}

export default Profile