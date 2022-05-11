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
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

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
