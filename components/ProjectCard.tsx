import Image from 'next/image'
import React from 'react'
import arrow from '../public/arrow.png'
import { IProjects } from '../typeings'

interface Props {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  href?: string
  project: IProjects
}

const ProjectCard = React.forwardRef(
  (
    { onClick, href, project }: Props,
    ref: React.LegacyRef<HTMLAnchorElement>
  ) => {
    const image = project.attributes.images.data[0].attributes.url

    return (
      <>
        <div className="flex flex-col pb-24">
          <a href={href} onClick={onClick} ref={ref} className="cursor-pointer">
            <div className="pb-3">
              <Image
                src={`http://localhost:1337${image}`}
                alt="project image"
                width={2000}
                height={1333}
              />
            </div>

            <div>
              <div className="flex flex-col px-5">
                <div className="flex flex-row items-center">
                  <p className="text-2xl font-bold">
                    {project.attributes.title}
                  </p>
                  <div className="relative h-6 w-6">
                    <Image
                      src={arrow}
                      alt="arrow"
                      layout="fill"
                      objectFit="scale-down"
                    />
                  </div>
                </div>
                <p>{project.attributes.tools}</p>
              </div>
            </div>
          </a>
        </div>
      </>
    )
  }
)

ProjectCard.displayName = 'ProjectCard'
export default ProjectCard
