import React, {useContext} from 'react'
import { AppContext } from '../../Context'

const Projects = () => {
  const {t} = useContext(AppContext)
  return (
    <div className='page'>
        {t('Projects')}
    </div>
  )
}

export default Projects