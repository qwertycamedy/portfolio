import React from 'react'
import cl from './MyBtn.module.scss'

const MyBtn = ({children, classNames, ...props}) => {
  return (
    <button className={cl.btn + ` ${classNames}`} {...props}>
        {children}
    </button>
  )
}

export default MyBtn