import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
const Nav = ({ isLoggedIn }) => {
    return (
        <nav>
            <div className='logo'><Link to="/">OLA</Link></div>
            <div className='search'><AiOutlineSearch/>

            <input type='text' placeholder='Search products' />
            </div>
            <div>
            {!isLoggedIn &&
                <>    <Link to='/login'>Login</Link>
                    <Link to='/signup'>SignUp</Link>
                    </>
                }
            <Link to='/cart'>Cart</Link>
                </div>
        </nav>
    )
}

export default Nav