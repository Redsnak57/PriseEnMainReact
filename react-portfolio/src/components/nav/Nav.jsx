import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'

function Nav() {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><BiUser /></a>
      <a href="#experience"><BiBook /></a>
      <a href="#job"><RiServiceLine /></a>
      <a href="#contact"><AiOutlineMessage  /></a>
    </nav>
  )
}

export default Nav