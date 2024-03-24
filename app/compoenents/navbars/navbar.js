"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

import {scrollFunction} from "./navShrink";

import { socialItems, navItems } from './navData';




const NavElement = ({
    type,
    search,
    social,
    authentication,
    styleLogo,
    styleNav,
    styleOther,
    logo,
    style,
    styleNavUl,
    navItemsStyle,
}) => {

    // useEffect(()=>{
    //     scrollFunction()
    
    // },[scrollFunction])
    console.log(social)
  return (
    <nav className={`navbar navbar-expand-lg ${style}`} id='navbar' data-bs-theme="dark">
        <div className="container-fluid">
            {/* Logo */}
            <div className={`${styleLogo}`}>
                <div className={`navbar-brand`} href="#"><Image src={logo} alt='Logo image' id='logo' className='logo py-auto'/></div>
            </div>

            {/* Toggler */}
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span id='togglerIcon' className="navbar-toggler-icon"></span>
            </button>

            {/* Nav Items */}
            <div className={`collapse navbar-collapse visible ${styleNav}`} id="navbarSupportedContent">
                <ul className={`navbar-nav mb-2 mb-lg-0 ${styleNavUl}`}>
                    {
                        navItems.map((item,key)=>(
                            item.type === "item" 
                            ? 
                            <li key={key} className="nav-item">
                                <Link className="nav-link active" aria-current="page" href={item.link}>{item.title}</Link>
                            </li>
                            : 
                            item.type === "dropdown"
                            ?
                            // Dropdown Item 
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {item.title}
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        item.items.map((element, key)=>(
                                            <li key={key}><a className="dropdown-item" href="#">{element.title}</a></li>
                                        ))
                                    }
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            :
                            null
                        ))
                    }
                </ul>
            </div>
            <div className={`collapse navbar-collapse flex-grow-0 visible ${styleOther}`} id="navbarSupportedContent">
                {/* Search Form */}
                {
                    search 
                    ? 
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    : 
                    null
                }

                {/* Social Icons */}
                <div className='social'>
                {
                    social 
                    ?
                    socialItems.map((item,key)=>(
                        item.visible 
                        ?
                        <i key={key} className={`${item.icon} mx-2 social_icons`}></i>
                        :
                        null
                    ))
                    :
                    null
                }
                </div>
                {/* Authentication */}
                {
                    authentication
                    ?
                    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${navStyle}`}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Log Out</a>
                        </li>
                    </ul>
                    :
                    null
                }
            </div>
        </div>
    </nav>
  )
}

export default NavElement