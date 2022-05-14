import Nav from '../../components/Nav'
import { fetchAPI } from '../../utils/api'
import { IProject, ISlug, Params } from '../../typeings'
import Image from 'next/image'
import Footer from '../../components/Footer'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'
import { getStrapiMedia } from '../../utils/media'
const variant = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.6,
    },
  },
}

const Project = ({ project }: IProject) => {
  const image = project.attributes.images.data[0]
  return (
    <main className="font-Inter">
      <Nav />
      <div className="px-5 py-20 lg:px-16 xl:px-36 ">
        <motion.h1
          className="pb-5 text-7xl font-bold"
          variants={variant}
          initial="initial"
          animate="animate"
        >
          {project.attributes.title}
        </motion.h1>
        <p className="pb-12 italic">{project.attributes.tools}</p>
        <span className="flex justify-center">
          <motion.div
            className="w-3/4 pb-10 lg:w-1/2 xl:w-2/5"
            variants={variant}
            initial="initial"
            animate="animate"
          >
            <Image
              src={`${getStrapiMedia(image)}`}
              alt="project image"
              width={2000}
              height={1333}
            />
          </motion.div>
        </span>
        <div className="m-auto max-w-7xl text-xl">
          <div className="mb-3 w-14 border border-black"></div>
          <h2 className="pb-5 text-2xl font-bold">Overview</h2>
          <div>
            <ReactMarkdown>{project.attributes.content}</ReactMarkdown>
          </div>
        </div>
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
