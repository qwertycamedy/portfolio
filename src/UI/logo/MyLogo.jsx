import React from 'react'
import { Link } from 'react-router-dom'
import cl from './MyLogo.module.scss'
import logoImg from '../../assets/img/logo.svg'

const MyLogo = ({classnames, ...props}) => {
  return (
    <Link className={cl.logo + ` ${classnames}`} to='/' {...props}>
        <img src={logoImg} alt="img" width="31" height="31" />
      </Link>
  )
}

export default MyLogo