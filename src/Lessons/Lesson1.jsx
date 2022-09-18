import React from 'react'
import './lesson.css'

export default function Lesson1() {
  return (
    <div className='lesson1'> 
    <code> &#128279; Katakana - harf va bo'g'inlar jadvali</code>
     <img src="https://www.pdf-archive.com/2016/10/14/katakana/preview-katakana-1.jpg" style={{
      "zIndex": "5",
    "width": "80%",
    "height": "120vh"}} alt="Katakana harf va undoshlari" />
    <p className='comments'>* Katakana bu yapon tilining alfabiti bo'lib, u asosan chet tilidan o'zlashtirilgan va chet tili so'zlari uchun ishlatiladi.
     <br /> Masalan: yapon tilida ismingizni yozmoqchi bo'lsangiz ushbu harf va bo'g'inlar jadvalidan foydalanasiz.
    </p>
    <p className='comments'>P.S: Yapon tilida juda ko'plab so'zlar inglizcha so'zlardan iborat bo'lgani uchun siz ushbu jadvalni birinchi o'rganganiz ma'qul.
    <br />Inglizchani bilganiz esa so'z yodlash va sifatli dars olishingizda juda qo'l keladi</p>
    <a href='https://www.daryo.uz' target={'_blank'} rel={"noreferrer"} className='links-to-books'> &#128279; &#128279; Katakana o'rganish uchun yozuv kitobi</a>
    </div>
  )
}
