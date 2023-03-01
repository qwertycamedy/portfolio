import React from 'react'
import cl from './Section.module.scss'

const Section = ({children, ...props}) => {
  return (
    <section className={cl.section} {...props}>
        <div className={cl.container}>
          <div className={cl.inner}>
            {children}
          </div>
        </div>
    </section>
  )
}

export default Section