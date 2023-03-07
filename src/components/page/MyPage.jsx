import React from 'react'
import cl from './MyPage.module.scss'

const MyPage = ({children, classNames, ...props}) => {
  return (
    <div className={cl.page + ` ${classNames}`} {...props}>
            {children}
    </div>
  )
}

export default MyPage