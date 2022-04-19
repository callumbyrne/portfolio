import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import MenuIcon from './MenuIcon'

const Nav = () => {
  return (
    <nav className="mx-7 my-10 flex items-center justify-between">
      <div>
        <Link href="/" passHref>
          <a className="flex items-center">
            <Image src={logo} alt="logo" />
          </a>
        </Link>
      </div>

      <button className="md:hidden">
        <MenuIcon />
      </button>

      <div className="hidden space-x-12 font-sans text-3xl font-bold md:inline-flex">
        <h2>About</h2>
        <h2>Projects</h2>
        <h2>Contact</h2>
      </div>
    </nav>
  )
}

export default Nav
