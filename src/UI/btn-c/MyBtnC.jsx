import React from 'react'
import cl from './MyBtnC.module.scss'

const MyBtnC = ({w, h, img}) => {
  return (
    <button className={cl.btn}>
        <img className={cl.btnImg} src={img} width={w} height={h} style={{width: `${w}px`, height: `${h}px`}} alt="img" />
    </button>
  )
}

export default MyBtnC