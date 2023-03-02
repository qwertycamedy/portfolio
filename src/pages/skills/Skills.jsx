import React, {useContext} from 'react'
import { AppContext } from '../../Context'

const Skills = () => {
  const {t} = useContext(AppContext)
  return (
    <div className='page'>{t('Skills')}</div>
  )
}

export default Skills