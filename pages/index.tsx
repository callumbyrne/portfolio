import { useEffect, useState } from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'
import ProjectsSection from '../components/ProjectsSection'
import { fetchAPI } from '../utils/api'
import { IProps } from '../typeings'

export async function getStaticProps() {
  const response = await fetchAPI('/projects', { populate: '*' })

  return {
    props: {
      projects: response.data,
    },
  }
}

const Home = ({ projects }: IProps) => {
  const [loading, setLoading] = useState(true)

  let hash = ''

  if (typeof window !== 'undefined') {
    hash = window.location.hash
  }

  useEffect(() => {
    if (hash !== '') {
      setLoading(false)
    }
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [hash])

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const elm = document.querySelector(hash)
        elm?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  })

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <About />
          <ProjectsSection projects={projects} />
          <Footer />
        </>
      )}
    </>
  )
}

export default Home
