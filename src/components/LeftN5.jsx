import React from 'react'
import { useState } from "react";
import { TagItems    } from "./TagItems";
import { Link } from "react-router-dom";
export default function LeftN5() {
    const lessons = [
        {
          lesson: "1-dars",
          dropdown: [
            { list: "Katakana", id: "a1" },
            { list: "Hiragana", id: "a2" },
          ],
          id: 1,
        },
        {
          lesson: "2-dars",
          dropdown: [
            { list: "Video", id: "b1" },
            { list: "Grammatika", id: "b2" },
            { list: "Kanji", id: "b3" },
            { list: "Yangi so'zlar", id: "b4" },
          ],
          id: 2,
        },
        {
          lesson: "3-dars",
          dropdown: [
            { list: "Video", id: "c1" },
            { list: "Grammatika", id: "c2" },
            { list: "Kanji", id: "c3" },
            { list: "Yangi so'zlar", id: "c4" }
            
          ],
          id: 3,
        },
        {
          lesson: "4-dars",
          dropdown: [
            { list: "Video", id: "d1" },
            { list: "Grammatika", id: "d2" },
            { list: "Kanji", id: "d3" },
            { list: "Yangi so'zlar", id: "d4" }
            
          ],
          id: 4,
        },
        {
          lesson: "5-dars",
          dropdown: [
            { list: "Video", id: "e1" },
            { list: "Grammatika", id: "e2" },
            { list: "Kanji", id: "e3" },
            { list: "Yangi so'zlar", id: "e4" }
           
          ],
          id: 5,
        },
        {
          lesson: "6-dars",
          dropdown: [
            { list: "Video", id: "f1" },
            { list: "Grammatika", id: "f2" },
            { list: "Kanji", id: "f3" },
            { list: "Yangi so'zlar", id: "f4" }
            
          ],
          id: 6,
        },
        {
          lesson: "7-dars",
          dropdown: [
            { list: "Video", id: "g1" },
            { list: "Grammatika", id: "g2" },
            { list: "Kanji", id: "g3" },
            { list: "Yangi so'zlar", id: "g4" }
           
          ],
          id: 7,
        },
        {
          lesson: "8-dars",
          dropdown: [
            { list: "Video", id: "h1" },
            { list: "Grammatika", id: "h2" },
            { list: "Kanji", id: "h3" },
            { list: "Yangi so'zlar", id: "h4" }
            
          ],
          id: 8,
        },
        {
          lesson: "9-dars",
          dropdown: [
            { list: "Video", id: "i1" },
            { list: "Grammatika", id: "i2" },
            { list: "Kanji", id: "i3" },
            { list: "Yangi so'zlar", id: "i4" }
            
          ],
          id: 9,
        },
        {
          lesson: "10-dars",
          dropdown: [
            { list: "Video", id: "j1" },
            { list: "Grammatika", id: "j2" },
            { list: "Kanji", id: "j3" },
            { list: "Yangi so'zlar", id: "j4" }
            
          ],
          id: 10,
        },
        {
          lesson: "11-dars",
          dropdown: [
            { list: "Video", id: "k1" },
            { list: "Grammatika", id: "k2" },
            { list: "Kanji", id: "k3" },
            { list: "Yangi so'zlar", id: "k4" }
            
          ],
          id: 11,
        },
        {
          lesson: "12-dars",
          dropdown: [
            { list: "Video", id: "l1" },
            { list: "Grammatika", id: "l2" },
            { list: "Kanji", id: "l3" },
            { list: "Yangi so'zlar", id: "l4" }
           
          ],
          id: 12,
        },
        {
          lesson: "13-dars",
          dropdown: [
            { list: "Video", id: "m1" },
            { list: "Grammatika", id: "m2" },
            { list: "Kanji", id: "m3" },
            { list: "Yangi so'zlar", id: "m4" }
            
          ],
          id: 13,
        },
        {
          lesson: "14-dars",
          dropdown: [
            { list: "Video", id: "n1" },
            { list: "Grammatika", id: "n2" },
            { list: "Kanji", id: "n3" },
            { list: "Yangi so'zlar", id: "n4" }
           
          ],
          id: 14,
        },
        {
          lesson: "15-dars",
          dropdown: [
            { list: "Video", id: "o1" },
            { list: "Grammatika", id: "12" },
            { list: "Kanji", id: "o3" },
            { list: "Yangi so'zlar", id: "o4" }
           
          ],
          id: 15,
        },
        {
          lesson: "16-dars",
          dropdown: [
            { list: "Video", id: "p1" },
            { list: "Grammatika", id: "p2" },
            { list: "Kanji", id: "p3" },
            { list: "Yangi so'zlar", id: "p4" }
          
          ],
          id: 16,
        },
        {
          lesson: "17-dars",
          dropdown: [
            { list: "Video", id: "q1" },
            { list: "Grammatika", id: "q2" },
            { list: "Kanji", id: "q3" },
            { list: "Yangi so'zlar", id: "q4" }
           
          ],
          id: 17,
        },
        {
          lesson: "18-dars",
          dropdown: [
            { list: "Video", id: "r1" },
            { list: "Grammatika", id: "r2" },
            { list: "Kanji", id: "r3" },
            { list: "Yangi so'zlar", id: "r4" }
            
          ],
          id: 18,
        },
        {
          lesson: "19-dars",
          dropdown: [
            { list: "Video", id: "s1" },
            { list: "Grammatika", id: "s2" },
            { list: "Kanji", id: "s3" },
            { list: "Yangi so'zlar", id: "s4" }
            
          ],
          id: 19,
        },
        {
          lesson: "20-dars",
          dropdown: [
            { list: "Video", id: "t1" },
            { list: "Grammatika", id: "t2" },
            { list: "Kanji", id: "t3" },
            { list: "Yangi so'zlar", id: "t4" }
          
          ],
          id: 20,
        },
        {
          lesson: "21-dars",
          dropdown: [
            { list: "Video", id: "u1" },
            { list: "Grammatika", id: "u2" },
            { list: "Kanji", id: "u3" },
            { list: "Yangi so'zlar", id: "u4" }
            
          ],
          id: 21,
        },
        {
          lesson: "22-dars",
          dropdown: [
            { list: "Video", id: "v1" },
            { list: "Grammatika", id: "v2" },
            { list: "Kanji", id: "v3" },
            { list: "Yangi so'zlar", id: "v4" }
           
          ],
          id: 22,
        },
        {
          lesson: "23-dars",
          dropdown: [
            { list: "Video", id: "w1" },
            { list: "Grammatika", id: "w2" },
            { list: "Kanji", id: "w3" },
            { list: "Yangi so'zlar", id: "w4" }
            
          ],
          id: 23,
        },
        {
          lesson: "24-dars",
          dropdown: [
            { list: "Video", id: "x1" },
            { list: "Grammatika", id: "x2" },
            { list: "Kanji", id: "x3" },
            { list: "Yangi so'zlar", id: "x4" }
            
          ],
          id: 24,
        },
        {
          lesson: "25-dars",
          dropdown: [
            { list: "Video", id: "y1" },
            { list: "Grammatika", id: "y2" },
            { list: "Kanji", id: "y3" },
            { list: "Yangi so'zlar", id: "y4" }
            
          ],
          id: 25,
        },
        {
          lesson: "26-dars",
          dropdown: [
            { list: "Video", id: "z1" },
            { list: "Grammatika", id: "z2" },
            { list: "Kanji", id: "z3" },
            { list: "Yangi so'zlar", id: "z4" }
            
          ],
          id: 26,
        },
      ];
      const [act, setActive] = useState("");
      const [state, setState] = useState(false);
    
      const toggle = (id) => {
        setActive(id);
        setState(!state);
      };
    
  return (
    <>
    <div className="left_side">
        <h3 className="text-white p-2">JLPT N5 darslari</h3>
        <div className="lessons-table">
          {lessons.map((lesson) => (
            <li
              className={`p-2 d-flex flex-column ${
                act === lesson.id ? "active" : ""
              }`}
              key={lesson.id}
            >
              <Link className={`lesson px-2`} onClick={() => toggle(lesson.id)}>
              &#128366;{lesson.lesson}
              </Link>
              <TagItems
                dropdown={lesson.dropdown}
                active={act === lesson.id ? "active" : ""}
              />
            </li>
          ))}
        </div>
      </div>
      
      </>
  )
}
