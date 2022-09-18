import React from 'react'

export default function Footer() {
  return (
    <div className='container-fluid footer d-flex justify-content-between align-items-center pt-1 text-white'>
    <p>{new Date().getFullYear()} @Copyright. </p>
    <p>Created By a Student of UWED</p>
    </div>
  )
}
