import React from 'react'
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <a href={'/home'}>Home</a>
        <ul className="lists">
                <li className="list"><a href={"/blog"} >Blog</a></li>
                <li className="list"><a href={"/login"}>Login</a></li>
                <li className="list"><a href={"/register"} className="btn">Sign Up</a></li>
            </ul>
    </div>
    
  )
}

export default Header;