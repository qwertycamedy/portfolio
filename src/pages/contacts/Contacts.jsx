import React, {useContext} from 'react'
import { AppContext } from '../../Context'

const Contacts = () => {
  const {t} = useContext(AppContext)
  return (
    <div className='page'>{t('Contacts')}</div>
  )
}

export default Contacts