import Nav from './Nav'

const Header = () => {
  return (
    <div className="header mx-20 border">
      <Nav />
      <div className="flex flex-row border">
        <div className="w-2/3 border">Callum Byrne</div>
        <div className="flex w-1/3 border">Full Stack Developer</div>
      </div>
    </div>
  )
}

export default Header
