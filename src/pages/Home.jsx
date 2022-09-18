import React from "react";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div className="home">
      <div>
        <h1 className="my-4">#Hammasi Yaponiya Haqida.</h1>
        <div className="video-wrapper">
        <ReactPlayer
         width="100%"
         height="40vh"
         controls
          url="https://youtu.be/8fMa1CUcdVs"
        />
        </div>
      </div>
      <div className="data">
        <h3>#Ma'lumotlar</h3>
        <p>
          Yaponiya (yaponcha 日本 Nippon, Nihon) — Sharqiy Osiyoda, Tinch
          okeandagi orollarda joylashgan davlat. Yaponiya hududida 6,8 mingga
          yaqin orol boʻlib, shimoli-sharqdan janubi-gʻarbga qariyb 9.13 ming
          kmga choʻzilgan; eng yirik orollari: Hokkaido, Honshu, Shikoku va
          Kyushu. Shimolidan Oxota dengizi, sharq va janubi-sharqdan Tinch
          okean, gʻarbdan Yapon va Sharqiy Xitoy dengizlari bilan oʻralgan.
          Maydon 377,8 ming km². Aholisi 126 mln. kishi (2021). Poytaxti — Tokio
          shahri. Yaponiya maʼmuriy jihatdan 47 prefekturaga boʻlinadi.
        </p>
        <h3>#Davlat tuzumi</h3>
        <p>
          Yaponiya — konstitutsiyaviy monarxiya. Amaldagi banana 1947-yil
          3-mayda kuchga kirgan (keyinchalik tuzatishlar kiritilgan). Davlat
          boshligʻi — imperator (1989-yildan Akihito). Konstitutsiyaning
          1-moddasiga koʻra, u "davlat va xalq birligi ramzi"dir. Imperator
          oilasining er aʼzolari imperatorlik taxti uchun merosxoʻr hisoblanadi.
          Konstitutsiyaga muvofiq, imperator mustaqil hokimiyatga ega emas.
          Imperatorning davlat ishlariga aloqador boʻlgan har qanday faoliyati
          Vazirlar mahkamasi maslahati va maʼqullashi bilan amalga oshiriladi.
          Qonun chiqaruvchi oliy hokimiyatni 2 palatali parlament (Vakillar
          palatasi va Maslahatchilar palatasi), ijroiya hokimiyatni Bosh vazir
          boshchiligidagi hukumat (Vazirlar mahkamasi) amalga oshiradi.
        </p>

        <h5>
          &#128391; Link:{" "}
          <a href="https://uz.wikipedia.org/wiki/Yaponiya" target="blank"> Ko'proq bilish</a>
        </h5>
      </div>
    </div>
  );
}
