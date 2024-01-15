import React from 'react'
import {MdError} from 'react-icons/md'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className='pageNotFound'>
         <main>
            <div>
                <MdError/>
                <h1>404</h1>
            </div>

            <p>Page Not Found, Click below to go to home page.</p>
            <Link to="/">Go to Home</Link>
         </main>
    </section>
  )
}

export default PageNotFound