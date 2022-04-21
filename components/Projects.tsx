import Image from 'next/image'
import arrow from '../public/arrow.png'
import placeholderProject from '../public/placeholderProject.png'

const Projects = () => {
  return (
    <section className="flex flex-col pb-10">
      <div className="flex flex-row items-center p-7">
        <h2 className="mb-3 flex items-center text-6xl font-bold">Projects</h2>
        <div className="relative flex h-16 w-16 items-center">
          <Image src={arrow} alt="arrow" layout="fill" objectFit="scale-down" />
        </div>
      </div>

      <div className="flex flex-col">
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
    </section>
  )
}

export default Projects
