import Image from 'next/image'
import Link from 'next/link'
import arrow from '../public/arrow.png'
import { IProps } from '../typeings'
import ProjectCard from './ProjectCard'

const ProjectsSection = ({ projects }: IProps) => {
  return (
    <section className="flex flex-col">
      <div className="flex cursor-pointer flex-row items-center px-5 pt-20 pb-10">
        <Link href="/projects" passHref>
          <div className="flex flex-row">
            <h2 className="flex items-center text-6xl font-bold">Projects</h2>
            <div className="relative flex h-16 w-16 items-center">
              <Image
                src={arrow}
                alt="arrow"
                layout="fill"
                objectFit="scale-down"
              />
            </div>
          </div>
        </Link>
      </div>

      {projects.map((project) => (
        <ProjectCard key={project.attributes.title} project={project} />
      ))}
    </section>
  )
}

export default ProjectsSection
