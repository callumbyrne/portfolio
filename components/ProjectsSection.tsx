import { motion } from 'framer-motion'
import Link from 'next/link'
import { IProps } from '../typeings'
import ProjectCard from './ProjectCard'

const variant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.6,
    },
  },
}

const ProjectsSection = ({ projects }: IProps) => {
  return (
    <section
      className="flex flex-col font-Inter lg:px-16 xl:px-36"
      id="projects"
    >
      <div className="flex flex-row items-center px-5 pt-36 pb-10">
        <motion.h2
          className="flex items-center text-8xl font-bold"
          variants={variant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 1 }}
        >
          Projects
        </motion.h2>
      </div>

      {projects.map((project, index) => (
        <Link
          key={project.attributes.slug}
          href={`/projects/${project.attributes.slug}`}
          passHref
        >
          <ProjectCard
            key={project.attributes.title}
            project={project}
            index={index}
          />
        </Link>
      ))}
    </section>
  )
}

export default ProjectsSection
