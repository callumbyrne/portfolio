import Nav from '../../components/Nav'
import { fetchAPI } from '../../lib/api'
import { IProject, ISlug, Params } from '../../typeings'

const Project = ({ project }: IProject) => {
  console.log(project)
  return (
    <main>
      <Nav />
      <h1>hello</h1>
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
