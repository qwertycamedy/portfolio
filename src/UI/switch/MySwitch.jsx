import React, { useState } from 'react'
import cl from './MySwitch.module.scss'

const MySwitch = ({mySwitch}) => {
  const [isSwitched, setIsSwitched] = useState(false)
  const onSwitch = () => {
    setIsSwitched(!isSwitched);
  }
  return (
  <button className={isSwitched ? cl.switch + ' ' + cl.switched : cl.switch + ' ' + cl.unswitched} onClick={onSwitch}>
        <img
          className={cl.one}
          src={mySwitch.left}
          loading="lazy"
          width="20"
          height="20"
          alt="img"
        />
        <img
          className={cl.two}
          src={mySwitch.right}
          loading="lazy"
          width="20"
          height="20"
          alt="img"
        />
  </button>
  )
}

export default MySwitch