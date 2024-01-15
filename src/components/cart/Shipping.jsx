import React from 'react'
import '../../styles/shipping.scss'
import { motion } from 'framer-motion'
import {Country,State} from 'country-state-city'


const Shipping = () => {
  return (
    <motion.section initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}} className='shipping'>

        <main>
            <h1>Shipping Details</h1>
            <form>
                <div>
                    <label>H. No.</label>
                    <input type="text" placeholder='Enter House No.'/>
                </div>
                <div>
                    <label>City</label>
                    <input type="text" placeholder='Enter City'/>
                </div>
                
                <div>
                    <label>Pin Code</label>
                    <input type="number" placeholder='Enter Pin Code'/>
                </div>
                <div>
                    <label>Landmark</label>
                    <input type="text" placeholder='Enter Landmark'/>
                </div>
                <div>
                    <label>Country</label>
                    <select>
                        <option value=''>Country</option>
                        {
                            Country && Country.getAllCountries().map(i=>(
                                <option value={i.isoCode} key={i.isoCode}>
                                    {i.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label>State</label>
                    <select>
                        <option value=''>State</option>
                         {
                            State && State.getStatesOfCountry('IN').map(i=>(
                                <option value={i.isoCode} key={i.isoCode}>
                                    {i.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                <label>District</label>
                    <select>
                        <option value=''>District</option>
                        <input type="text" placeholder='Enter District'/>
                    </select>
                </div>
                <div>
                    <label>Phone No.</label>
                    <input type="text" placeholder='Enter Mobile No.'/>
                </div>

                <button>Confirm Order</button>
            </form>

        </main>

    </motion.section>
  )
}

export default Shipping