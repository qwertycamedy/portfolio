import React from 'react'
import cl from './MySection.module.scss'

const MySection = ({children, classNames, ...props}) => {
  return (
    <section className={cl.section + ` ${classNames}`} {...props}>
        <div className={cl.container}>
          <div className={cl.inner}>
            {children}
          </div>
        </div>
    </section>
  )
}

export default MySection