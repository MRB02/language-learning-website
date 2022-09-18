import React from 'react'
import ReactPlayer from "react-player";
import './lesson.css'
export default function Lesson3() {
  return (
    <div className='lesson-videos'>
    <code> &#128279; Grammatika bo'yicha 1-dars </code>

     <div className="video">
    <ReactPlayer 
    width="100%"
    height="50vh"
    controls
          style={{ 
           "margin": "auto"
          }}
          url="https://youtu.be/gi2AeYO-g8E"
        />
</div> 

        <a href='https://www.daryo.uz' target={'_blank'} rel={"noreferrer"} className='links-to-books'> &#128279; &#128279; Grammatika bo'yicha kitobni ushbu saytdan yuklab olishingiz mumkin</a>
        
        <p className="comments">
          P.S: Ushbu dars ingliz tilida bo'lgani uchun ba'zi bir o'zbek tilida o'rganuvchilarimizdan uzr so'raymiz. <br />
          Agar sizda juda qiyinchilik bo'lsa grammatika qismida o'zbek tilida matn shaklida ma'lumot olasiz. Shunda ham tushunmasangiz murojaat qilishingiz mumkin! 
        </p>
    </div>
  )
}
