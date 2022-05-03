import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectsSection from '../components/ProjectsSection'
import { fetchAPI } from '../lib/api'
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
  console.log(projects)
  return (
    <>
      <Header />
      <About />
      <ProjectsSection projects={projects} />
      <Footer />
    </>
  )
}

export default Home
