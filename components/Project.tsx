import Image from 'next/image'
import arrow from '../public/arrow.png'
import { IProject } from '../typeings'

const Project = ({ project }: IProject) => {
  const image = project.attributes.images.data[0].attributes.url

  return (
    <>
      <div className="flex flex-col pb-24">
        <div className="flex pb-3">
          <Image
            src={`http://localhost:1337${image}`}
            alt="project"
            height={360}
            width={640}
          />
        </div>

        <div>
          <div className="flex flex-col px-5">
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
        </div>
      </div>
    </>
  )
}

export default Project