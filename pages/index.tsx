import type { NextPage } from 'next'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default Home
