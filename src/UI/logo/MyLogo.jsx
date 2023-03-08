import React from 'react'
import { Link } from 'react-router-dom'
import cl from './MyLogo.module.scss'

const MyLogo = ({classnames, img, ...props}) => {
  return (
    <Link className={cl.logo + ` ${classnames}`} to='/' {...props}>
        <img src={img} alt="img" width="31" height="31" />
      </Link>
  )
}

export default MyLogo