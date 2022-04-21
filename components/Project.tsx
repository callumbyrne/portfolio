import Image from 'next/image'
import placeholderProject from '../public/placeholderProject.png'
import arrow from '../public/arrow.png'

const Project = () => {
  return (
    <>
      <div className="flex flex-col pb-24">
        <div className="flex pb-3">
          <Image
            src={placeholderProject}
            alt="project"
            height={360}
            width={640}
          />
        </div>

        <div>
          <div className="flex flex-col px-7">
            <div className="flex flex-row items-center">
              <p className="text-2xl font-bold">Portfolio</p>
              <div className="relative h-6 w-6">
                <Image
                  src={arrow}
                  alt="arrow"
                  layout="fill"
                  objectFit="scale-down"
                />
              </div>
            </div>
            <p> NextJS + Typescript + TailwindCSS + Strapi</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
