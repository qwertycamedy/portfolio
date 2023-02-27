import React from 'react'
import cl from './MyBtn.module.scss'

const MyBtn = ({children, classnames, ...props}) => {
  return (
    <button className={cl.btn + ` ${classnames}`} {...props}>
        {children}
    </button>
  )
}

export default MyBtn