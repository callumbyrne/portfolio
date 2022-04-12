import Image from 'next/image'
import arrow from '../public/arrow.png'
import placeholderProject from '../public/placeholderProject.png'

const Projects = () => {
  return (
    <section className="mx-20 flex flex-col border">
      <div className="mb-12 flex flex-row border bg-blue-200">
        <h2 className="mb-3 pt-24 text-8xl font-bold">Projects</h2>
        <div className="flex items-end border">
          <Image src={arrow} alt="arrow" layout="fixed" />
        </div>
      </div>

      <div className="w-1/2 border">
        <Image src={placeholderProject} alt="project" />
      </div>

      <div className="w-1/2 border">
        <hr />
      </div>
    </section>
  )
}

export default Projects
