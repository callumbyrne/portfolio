import type { NextPage } from 'next'
import About from '../components/About'
import Header from '../components/Header'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
    </div>
  )
}

export default Home
