import React from 'react'
import BannerImage from "../assets/resim2.jpeg"

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${BannerImage})`}}></div>
        <div className='rightSide'>
            <h1>Bizimle İletişime Geçin</h1>
            <form id="contact-form" method="POST">
                    <label htmlFor="name">Ad Soyad</label>
                    <input name="name" placeholder='Adınızı Girin' type="text"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder='Email Girin' type="email"/>
                    <label htmlFor="message">Mesaj</label>
                    <textarea name="message" required rows="6" placeholder='Mesajınızı Yazın'></textarea>
                    <button type='submit'>Gönder</button>
            </form>
        </div>
    </div>
  )
}

export default Contact