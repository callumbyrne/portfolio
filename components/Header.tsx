import Nav from './Nav'

const Header = () => {
  return (
    // Contains global css
    <section className="flex w-full flex-col justify-between">
      <Nav />
      <div className="mx-7 flex flex-col pb-10">
        {/* Contains global css */}
        <div className="flex items-end pb-11 text-8xl font-bold leading-none lg:w-3/5">
          Callum Byrne
        </div>
        <div className="flex flex-col space-y-10 text-2xl md:space-y-24 lg:w-2/5 lg:py-16 lg:px-20">
          <p className="flex md:justify-end">Melbourne - Australia</p>
          <div>
            <p className="flex md:justify-end">Full Stack Developer</p>
            <p className="flex italic md:justify-end md:text-right">
              HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, NodeJS,
              Express, MongoDB, Jest, Cypress
            </p>
          </div>
          <p className="flex md:justify-end">callumjbyrne97@gmail.com</p>
        </div>
      </div>
    </section>
  )
}

export default Header
