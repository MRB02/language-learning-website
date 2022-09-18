import React from "react";
import { useParams, Switch, Route } from 'react-router-dom';
import LeftN5 from './LeftN5';
import LeftT from './LeftT';
import LeftSP from './LeftSP';




export default function LeftSide() {
  
  let {slug} = useParams()


  return (
    <>
      <Switch>
      {slug==='N5' &&  <Route path={``} component={LeftN5}/>}
      {slug==='Stories_Podcasts' && <Route path={`/${slug}`} component={LeftSP}/>}
      {slug==='traditions' && <Route path={`/${slug}`} component={LeftT}/>}
      </Switch>
    </>
  );
}
