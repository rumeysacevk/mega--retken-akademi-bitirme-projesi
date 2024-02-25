import React from 'react'
import Logo from "../assets/mega logo.png";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} />
        </div>
        <div className='rightSide'>
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Mega</Link>
          <Link to="/about">Projeler</Link>
          <Link to="/contact">İletişim</Link>
        </div>
    </div>
  )
}

export default Navbar