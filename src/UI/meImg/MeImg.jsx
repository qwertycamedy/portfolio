import React from 'react'
import meImg from '../../assets/img/me.jpg'
import cl from './MeImg.module.scss'

const MeImg = ({w, h, classNames}) => {
  return (
    <img
      className={`${cl.img} ${classNames}`}
      src={meImg}
      loading="lazy"
      width={w}
      height={h}
      alt="Adil Kairbekov"
    />
  )
}

export default MeImg