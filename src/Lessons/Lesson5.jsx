import React from "react";
import ReactPlayer from "react-player";
export default function Lesson5() {
  return (
    <div className="lesson-videos">
      <code> &#128279; Kanji (Ierogliflar) bo'yicha 1-dars </code>

      <div className="video">
        <ReactPlayer
         width="100%"
         height="50vh"
         controls
          style={{
            margin: "auto",
          }}
          url="https://youtu.be/cLsiM8SpQik"
        />
      </div>

      <a
        href="https://www.daryo.uz"
        target={"_blank"}
        rel={"noreferrer"}
        className="links-to-books"
      >
        {" "}
        &#128279; &#128279; Kanji bo'yicha kitobni ushbu saytdan yuklab
        olishingiz mumkin
      </a>

      <p className="comments">
        P.S: Ushbu dars ingliz tilida bo'lgani uchun ba'zi bir o'zbek tilida
        o'rganuvchilarimizdan uzr so'raymiz. <br />
        Yapon tilida 3 ta yozuv turi mavjud: Hiragana, Katakana, Kanji.
        <br />
        Kanjilar yozuvda kam joy egallaydi va bir necha ma'nolarni ham ifodalaydi.
        Xitoy tilini o'rganmoqchi bo'lsangiz kelajakda unga ham yordam beradi.
      </p>
    </div>
  );
}
