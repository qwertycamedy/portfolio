import React from 'react'
import { Link } from 'react-router-dom'
import MySection from '../../../components/section/MySection'
import MyBtn from '../../../UI/btn/MyBtn'
import cl from './Start.module.scss'

const Start = ({t}) => {
  return (
    <MySection>
        <p className={cl.suptitle}>
            {t('qwertycamedy')}
        </p>
        <h1 className={cl.title + ' title-main'}>
          {t('Enjoy your day!')}
        </h1>
        <p className={cl.subtitle}>
          {t("Welcome to qwertycamedy. Need an amazing frontend? - You're in the right place!")}
        </p>
        <Link to={t('Hire me link')} target='_blank'>
            <MyBtn classNames={cl.btn}>
                {t('Hire me')}
            </MyBtn>
        </Link>
    </MySection>
  )
}

export default Start