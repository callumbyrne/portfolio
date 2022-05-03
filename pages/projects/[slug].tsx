import Nav from '../../components/Nav'
import { fetchAPI } from '../../lib/api'
import { IProject, ISlug, Params } from '../../typeings'
import Image from 'next/image'
import Footer from '../../components/Footer'
import ReactMarkdown from 'react-markdown'

const Project = ({ project }: IProject) => {
  console.log(project)
  const image = project.attributes.images.data[0].attributes.url
  return (
    <main>
      <Nav />
      <div className="px-5 pb-20">
        <h1 className="pb-1 text-7xl font-bold">{project.attributes.title}</h1>
        <p className="pb-5 italic">{project.attributes.tools}</p>
        <div className="pb-10">
          <Image
            src={`http://localhost:1337${image}`}
            alt="project image"
            width={2000}
            height={1333}
          />
        </div>
        <div className="mb-3 w-14 border border-black"></div>
        <h2 className="text-2xl font-bold">Overview</h2>
        <ReactMarkdown>{project.attributes.content}</ReactMarkdown>
      </div>
      <Footer />
    </main>
  )
}

export async function getStaticPaths() {
  const response = await fetchAPI('/projects', { fields: ['slug'] })

  return {
    paths: response.data.map((project: ISlug) => ({
      params: {
        slug: project.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: Params) {
  const response = await fetchAPI('/projects', {
    filters: {
      slug: params.slug,
    },
    populate: '*',
  })

  return {
    props: {
      project: response.data[0],
    },
  }
}

export default Project
