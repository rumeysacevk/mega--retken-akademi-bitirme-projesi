import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/anasayfa.jpg"
function Home() {
  return (
    <div className='home'  style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1>MERAM GELİŞİM AKADEMİSİ</h1>
        <p>Meram Belediyesi ile<br/>Gelişen Nesiller</p>
        <Link to="/menu">
        <button>Daha fazla</button>
        </Link>
      </div>
    </div>
  )
}

export default Home