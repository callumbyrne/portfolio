import Nav from './Nav'

const Header = () => {
  return (
    <section className="flex w-full flex-col justify-between">
      <Nav />
      <div className="flex flex-col px-5 pb-16">
        <div className="flex flex-col pb-11 text-6xl font-bold lg:w-3/5">
          {/* <h2 className="-mb-3">Callum</h2>
          <h2>Byrne</h2> */}
          <h2>
            I&apos;m Callum,
            <br /> a full stack developer based in Melbourne
          </h2>
        </div>
        <div className="flex flex-col space-y-8 text-2xl md:space-y-12 lg:w-2/5 lg:py-16 lg:px-20">
          {/* <p className="flex md:justify-end">Melbourne - Australia</p> */}
          <div>
            {/* <p className="flex md:justify-end">Full Stack Developer</p> */}
            <p className="flex justify-end text-right italic">
              HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, NodeJS,
              Express, MongoDB, Jest, Cypress
            </p>
          </div>
          <p className="flex justify-end">callumjbyrne97@gmail.com</p>
        </div>
      </div>
    </section>
  )
}

export default Header
