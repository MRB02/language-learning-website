import React from 'react'
import { useParams, Switch, Route } from 'react-router-dom'
import Lesson1 from './../Lessons/Lesson1';
import Lesson2 from './../Lessons/Lesson2';
import Lesson3 from './../Lessons/Lesson3';
import Lesson4 from './../Lessons/Lesson4';
import Lesson5 from './../Lessons/Lesson5';
import Lesson6 from './../Lessons/Lesson6';
export const Lesson = () => {

    let {id} = useParams()

  return (
    <>
    <Switch>
        {id==='a1' && <Route path={`/N5/${id}`} component={Lesson1} />}
        {id==='a2' && <Route path={`/N5/${id}`} component={Lesson2} />}
        {id==='b1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='b2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='b3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='b4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='c1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='c2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='c3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='c4' && <Route path={`/N5/${id}`} component={Lesson6} />}
       
        {id==='d1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='d2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='d3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='d4' && <Route path={`/N5/${id}`} component={Lesson6} />}
       
        {id==='e1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='e2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='e3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='e4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='f1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='f2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='f3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='f4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='g1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='g2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='g3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='g4' && <Route path={`/N5/${id}`} component={Lesson6} />}
    
        {id==='h1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='h2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='h3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='h4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='i1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='i2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='i3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='i4' && <Route path={`/N5/${id}`} component={Lesson6} />}
       
        {id==='j1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='j2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='j3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='j4' && <Route path={`/N5/${id}`} component={Lesson6} />}
       
        {id==='k1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='k2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='k3' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='k4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='l1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='l2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='l3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='l4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='m1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='m2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='m3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='m4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='n1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='n2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='n3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='n4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='o1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='o2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='o3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='o4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='p1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='p2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='p3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='p4' && <Route path={`/N5/${id}`} component={Lesson6} />}
       
        {id==='q1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='q2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='q3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='q4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='r1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='r2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='r3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='r4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='s1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='s2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='s3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='s4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='t1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='t2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='t3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='t4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='u1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='u2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='u3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='u4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='v1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='v2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='v3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='v4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='x1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='x2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='x3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='x4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='y1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='y2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='y3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='y4' && <Route path={`/N5/${id}`} component={Lesson6} />}
       
        {id==='z1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='z2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='z3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='z4' && <Route path={`/N5/${id}`} component={Lesson6} />}
        
        {id==='w1' && <Route path={`/N5/${id}`} component={Lesson3} />}
        {id==='w2' && <Route path={`/N5/${id}`} component={Lesson4} />}
        {id==='w3' && <Route path={`/N5/${id}`} component={Lesson5} />}
        {id==='w4' && <Route path={`/N5/${id}`} component={Lesson6} />}
       
        
    </Switch>
    </>
  )
}
