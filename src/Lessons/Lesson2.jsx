import React from 'react'

export default function Lesson2() {
  return (
    <div className='lesson1'> 
    <code> &#128279; Hiragana - harf va bo'g'inlar jadvali</code>
     <img src="https://i.pinimg.com/736x/0c/8d/ff/0c8dff3e5f87791581550cd418a8f2e4.jpg" style={{
    "zIndex": "5",
    "width": "60%",
    "padding": "25px 10px",
    "height": "100vh"}} alt="Katakana harf va undoshlari" />
    <p className='comments'>* Hiragana ham bu yapon tilining alfabiti bo'lib, u asosan yaponlar o'zlari ishlatadigan, ya'ni chetdan o'zlashtirilmagan so'zlari uchun ishlatiladi.
    </p>
    <p className="comments"> P.S: Bundan tashqari yapon so'zlarini yozish uchun kanjilar, ya'ni ierogliflar ham mavjud.
    <br /> Ularni bir nechta darslarni o'zlashtirib olgandan keyin yodlashni boshlasangiz oson bo'ladi.</p>
    <a href='https://www.daryo.uz' target={'_blank'} className='links-to-books'> &#128279; &#128279; Hiragana o'rganish uchun yozuv kitobi</a>
    </div>
  )
}
