import React, {useContext} from 'react'
import { AppContext } from '../../Context'

const Reviews = () => {
  const {t} = useContext(AppContext)
  return (
    <div className='page'>{t('Reviews')}</div>
  )
}

export default Reviews