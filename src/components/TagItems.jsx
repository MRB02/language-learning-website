import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export const TagItems = ({dropdown, active}) => {
  // Shu yerda radio button usulida, toggle qib className ga element qo'shilid
  const [state, setState] =useState(false)
  const [color, setColor] =useState('')

  const toggleColor =id=>{
    setColor(id)
    setState(!state)
  }
  return (
    <>
    {
      dropdown.map(item=>(
        <Link to={`/N5/${item.id}`} replace className={`drop-list ${active} ${color===item.id ? 'color' : ''} px-4 my-2`} key={item.id} onClick={()=>toggleColor(item.id)}>#{item.list}</Link>
      ))
    }
    </>
  )
}
