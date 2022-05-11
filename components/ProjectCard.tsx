import { motion } from 'framer-motion'
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

const imageVariant = {
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

const textVariant = {
  initial: {
    opacity: 0,
    y: -50,
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
            <motion.div
              className="px-5 pb-3 md:w-3/4"
              variants={imageVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                src={`http://localhost:1337${image}`}
                alt="project image"
                width={1080}
                height={720}
              />
            </motion.div>

            <motion.div
              className="flex flex-col px-5 md:w-3/4"
              variants={textVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 1 }}
            >
              <div className="flex flex-row items-center">
                <p className="text-2xl font-bold lg:text-4xl">
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
              <p className="lg:text-xl">{project.attributes.tools}</p>
            </motion.div>
          </a>
        </div>
      </>
    )
  }
)

ProjectCard.displayName = 'ProjectCard'
export default ProjectCard
