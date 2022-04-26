import Image from 'next/image'
import arrow from '../public/arrow.png'
import Project from './Project'

const Projects = () => {
  return (
    <section className="flex flex-col pb-10">
      <div className="flex flex-row items-center px-5 pt-20 pb-10 ">
        <h2 className="flex items-center text-6xl font-bold">Projects</h2>
        <div className="relative flex h-16 w-16 items-center">
          <Image src={arrow} alt="arrow" layout="fill" objectFit="scale-down" />
        </div>
      </div>

      <Project />
      <Project />
    </section>
  )
}

export default Projects
