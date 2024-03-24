import React from 'react'
import NavElement from './navbar'

const Navbar = () => {
  return (
    <div>

        <h1>Navbars</h1>

        <NavElement style={"bg-body-tertiary"} styleNavUl={"m-0"} styleLogo={"order-2"} styleNav={"order-1 flex-grow-0"} styleOther={"order-3"} search={false} social={true} authentication={false}/>
        
    </div>
  )
}

export default Navbar