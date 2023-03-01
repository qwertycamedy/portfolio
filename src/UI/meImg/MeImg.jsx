import React from 'react'
import meImg from '../../assets/img/me.jpg'

const MeImg = ({w, h}) => {
  return (
    <img
      className="navbar__img"
      src={meImg}
      loading="lazy"
      width={w}
      height={h}
      alt="Adil Kairbekov"
    />
  )
}

export default MeImg