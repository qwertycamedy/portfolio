import React, { forwardRef } from 'react'
import cl from './MyBtnC.module.scss'

const MyBtnC = forwardRef((props, ref) => {
  const { classNames, w, h, img} = props;
  return (
    <button className={cl.btn + ` ${classNames}`} ref={ref}>
        <img className={cl.btnImg} src={img} width={w} height={h} style={{width: `${w}px`, height: `${h}px`}} alt="img" />
    </button>
  )
})

export default MyBtnC