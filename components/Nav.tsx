import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'
import Menu from './Menu'
import { useState } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  if (typeof window !== 'undefined') {
    window.onresize = () => setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`${
          isOpen ? 'fixed top-0 z-50' : null
        } my-10 flex w-full items-center justify-between px-5`}
      >
        <div className="flex md:inline-flex">
          <Link href="/" passHref>
            <a
              className={`flex items-center md:invert-0 ${
                isOpen ? 'invert' : null
              }`}
            >
              <Image
                src={logo}
                alt="logo"
                height={28}
                objectFit="scale-down"
                objectPosition={'left'}
              />
            </a>
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className="hidden space-x-12 font-sans text-3xl font-bold md:inline-flex">
          <h2>About</h2>
          <h2>Projects</h2>
          <h2>Contact</h2>
        </div>
      </nav>
      <nav>{isOpen ? <Menu /> : null}</nav>
    </>
  )
}

export default Nav
