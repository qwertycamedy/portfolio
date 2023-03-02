import React, {useContext} from 'react'
import { AppContext } from '../../Context'

const About = () => {
  const {t} = useContext(AppContext)
  return (
    <div className='page'>{t('About')}</div>
  )
}

export default About