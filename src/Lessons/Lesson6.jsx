import React from 'react'
import ReactPlayer from 'react-player'

export default function Lesson6() {
  return (
    
    <div className="lesson-videos">
      <code> &#128279; Lug'at bo'yicha 1-dars </code>

      <div className="video">
        <ReactPlayer
         width="100%"
         height="50vh"
         controls
          style={{
            margin: "auto",
          }}
          url="https://youtu.be/wDpsF90DoeI"
        />
      </div>

      <a
        href="https://www.daryo.uz"
        target={"_blank"}
        rel={"noreferrer"}
        className="links-to-books"
      >
        {" "}
        &#128279; &#128279; Lug'at bo'yicha kitobni ushbu saytdan yuklab
        olishingiz mumkin
      </a>

      <p className="comments">
        P.S: Ushbu dars ingliz tilida bo'lgani uchun ba'zi bir o'zbek tilida
        o'rganuvchilarimizdan uzr so'raymiz. <br />
        Lug'atlarni berilgan link orqali kitoblarda ham o'zbek ham rus tillarida o'rganishingiz mumkin!
      </p>
    </div>
  )
}
