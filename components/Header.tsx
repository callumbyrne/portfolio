import Nav from './Nav'

const Header = () => {
  return (
    <div className="header-section mx-20 flex flex-col justify-between ">
      <Nav />
      <div className="flex h-full flex-row">
        <div className="header-name flex w-2/3 items-end pb-11 text-9xl font-bold">
          Callum Byrne
        </div>
        <div className="flex w-1/3 flex-col justify-between  py-16 text-2xl">
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
