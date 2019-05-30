import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  return(
    <header className="header">
      <FontAwesomeIcon className="icon" icon={faPaw} size="2x" />
      <h1 >Keilana's Pets & Co.</h1>
      <FontAwesomeIcon className="icon" icon={faPaw} size="2x" />
    </header>
  )
}

export default Header
