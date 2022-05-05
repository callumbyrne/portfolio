import Image from 'next/image'
import React from 'react'
import arrow from '../public/arrow.png'
import { IProjects } from '../typeings'

interface Props {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  href?: string
  project: IProjects
  index: number
}

const ProjectCard = React.forwardRef(
  (
    { onClick, href, project, index }: Props,
    ref: React.LegacyRef<HTMLAnchorElement>
  ) => {
    const image = project.attributes.images.data[0].attributes.url
    const alignment = index % 2

    return (
      <>
        <div
          className={`flex flex-col pb-24 ${
            alignment === 0 ? 'items-end' : null
          }`}
        >
          <a
            href={href}
            onClick={onClick}
            ref={ref}
            className="flex cursor-pointer flex-col items-end"
          >
            <div className="px-5 pb-3 md:w-3/4">
              <Image
                src={`http://localhost:1337${image}`}
                alt="project image"
                width={1080}
                height={720}
              />
            </div>

            <div className="flex flex-col px-5 md:w-3/4">
              <div className="flex flex-row items-center">
                <p className="text-2xl font-bold">{project.attributes.title}</p>
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
          </a>
        </div>
      </>
    )
  }
)

ProjectCard.displayName = 'ProjectCard'
export default ProjectCard
