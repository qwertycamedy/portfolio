import React, { useContext } from 'react'
import MyPage from '../../components/page/MyPage'
import { AppContext } from '../../Context'
import About from './about/About'
import Projects from './projects/Projects'
import Reviews from './reviews/Reviews'
import Skills from './skills/Skills'
import Start from './start/Start'

const Home = () => {
  const {t} = useContext(AppContext)
  return (
    <MyPage>
      <Start t={t} />
      <About t={t} />
      <Projects t={t} />
      <Reviews t={t} />
      <Skills t={t} />
    </MyPage>
  )
}

export default Home