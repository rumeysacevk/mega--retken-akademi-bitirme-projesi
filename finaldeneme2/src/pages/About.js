import React from 'react'
import BannerImage from "../assets/deneme.jpeg"


function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${BannerImage})`}}>
      
        </div>
        <div className='aboutBottom'>
            <h1>Hakkımızda</h1>
            <p>Toplum hayatı açısından ilerlemek ve mesafe kat edebilmek için bir neslin kendinden sonraki nesle aktaracağı tecrübe ve birikimlerle mümkün olacağı bilinen temel bir gerçektir. Günümüzde giderek karmaşıklaşan bilgi ve becerileri kazanabilen ve bu bilgilerin hızlı değişimine ayak uydurabilen bireylerin yetiştirilmesine ihtiyaç duyulmaktadır.

Bu kapsamda YENİ NESİL EĞİTİM PROJESİ ile hem dijital bir çağda doğmuş ve büyümüş olan “yeni neslin” yani z kuşağı ve Alfa kuşağının farklılaşan eğitim beklentilerine cevap vermek hem de önceki nesillerin kültürel aktarımını gerçekleştirecek ve nesiller arası iletişimi kuvvetlendirecek “yeni” bir çalışmadır.

Temel eğitim, ortaöğretim, yüksek öğretim kurumları, sivil toplum kuruluşları ve meslek birliklerinin paydaşlığında bireylerin karakter eğitimi gerçekleştirilecektir.</p>
        </div>
    </div>
  )
}

export default About