import React, { useContext } from 'react'
import { AppContext } from '../../Context'

const Home = () => {
  const {t} = useContext(AppContext)
  return (
    <div className='page'>{t('Home')}</div>
  )
}

export default Home