import Image from 'next/image'
import arrow from '../public/arrow.png'
import placeholderProject from '../public/placeholderProject.png'

const Projects = () => {
  return (
    <section className="mx-20 flex flex-col pb-10">
      <div className="mb-12 flex flex-row">
        <h2 className="mb-3 pt-24 text-8xl font-bold">Projects</h2>
        <div className="flex items-end ">
          <Image src={arrow} alt="arrow" layout="fixed" />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="mr-16 w-1/2 ">
          <Image src={placeholderProject} alt="project" />
        </div>

        <div className="ml-16 w-1/2">
          <hr className="h-0.5 bg-gray-400" />
          <div className="flex flex-row items-center justify-between py-9 text-2xl">
            <p>Project 1</p>
            <p> NextJS, TailwindCSS</p>
            <div>
              <Image
                src={arrow}
                alt="arrow"
                layout="fixed"
                height={34}
                width={34}
              />
            </div>
          </div>
          <hr className="h-0.5 bg-gray-400" />
        </div>
      </div>
    </section>
  )
}

export default Projects
