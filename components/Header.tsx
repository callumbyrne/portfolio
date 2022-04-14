import Nav from './Nav'

const Header = () => {
  return (
    // Contains global css
    <div className="header-section flex flex-col justify-between pl-20 ">
      <Nav />
      <div className="flex h-full flex-row">
        {/* Contains global css */}
        <div className="header-name flex w-3/5 items-end pb-11 text-9xl font-bold leading-none">
          Callum Byrne
        </div>
        <div className="flex w-2/5 flex-col space-y-24  py-16 px-20 text-2xl">
          <p className="flex justify-end">Melbourne - Australia</p>
          <div>
            <p className="flex justify-end">Full Stack Developer</p>
            <p className="flex justify-end text-right italic">
              HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, NodeJS,
              Express, MongoDB, Jest, Cypress
            </p>
          </div>
          <p className="flex justify-end">callumjbyrne97@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Header
