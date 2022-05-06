import Nav from './Nav'
import Image from 'next/image'

const Header = () => {
  return (
    <section className="flex w-full flex-col justify-between lg:px-16 xl:px-36">
      <Nav />
      <div className="flex flex-col px-5 pb-8 lg:flex-row lg:items-end lg:pb-12 lg:pt-36 xl:pt-52">
        <div className="flex flex-col pb-11 text-6xl font-bold lg:pb-0 lg:text-7xl xl:text-8xl">
          {/* <h2 className="-mb-3">Callum</h2>
          <h2>Byrne</h2> */}
          <h2>
            I&apos;m Callum,
            <br /> a full stack developer based in Melbourne
          </h2>
        </div>
        <div className="flex flex-col space-y-8 text-2xl md:space-y-12 xl:text-3xl">
          {/* <p className="flex md:justify-end">Melbourne - Australia</p> */}
          <div>
            {/* <p className="flex md:justify-end">Full Stack Developer</p> */}
            <p className="flex justify-end text-right italic leading-loose">
              HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, NodeJS,
              Express, MongoDB, Jest, Cypress
            </p>
          </div>
          <p className="flex justify-end">callumjbyrne97@gmail.com</p>
          <div className="flex flex-row justify-center space-x-20 lg:justify-end">
            <div className="flex items-center">
              <a
                target="_blank"
                href="https://github.com/callumbyrne"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                  alt="github logo"
                  width={64}
                  height={64}
                />
              </a>
            </div>
            <div className="flex items-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/callumjbyrne/"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg"
                  alt="github logo"
                  width={128}
                  height={128}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
