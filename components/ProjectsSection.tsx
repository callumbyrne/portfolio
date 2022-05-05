import Link from 'next/link'
import { IProps } from '../typeings'
import ProjectCard from './ProjectCard'

const ProjectsSection = ({ projects }: IProps) => {
  return (
    <section className="flex flex-col lg:px-16 xl:px-36" id="projects">
      <div className="flex flex-row items-center px-5 pt-12 pb-10">
        <h2 className="flex items-center text-8xl font-bold">Projects</h2>
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
