import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'

const Nav = () => {
  return (
    <div className="flex justify-between border py-8">
      <div>
        <Link href="/" passHref>
          <a className="flex items-center border">
            <Image src={logo} alt="logo" />
          </a>
        </Link>
      </div>
      <div className="hidden space-x-5 border font-sans text-3xl font-bold md:inline-flex">
        <h2>About</h2>
        <h2>Projects</h2>
        <h2>Contact</h2>
      </div>
    </div>
  )
}

export default Nav
