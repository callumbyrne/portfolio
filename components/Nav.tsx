import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'
import Menu from './Menu'
import { useState } from 'react'
import { motion } from 'framer-motion'

const variant = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.6,
    },
  },
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  if (typeof window !== 'undefined') {
    window.onresize = () => setIsOpen(false)
  }

  const clickHandler = () => setIsOpen(!isOpen)

  return (
    <>
      <nav
        className={`${
          isOpen ? 'fixed top-0 z-50' : null
        } mt-10 mb-5 flex w-full items-center justify-between px-5 lg:mb-10 lg:px-16 xl:px-36`}
      >
        <motion.div
          className="flex md:inline-flex"
          variants={variant}
          initial="initial"
          animate="animate"
        >
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
        </motion.div>

        <button onClick={clickHandler} className="md:hidden">
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <motion.div
          className="hidden space-x-16 font-Inter text-3xl font-medium md:inline-flex"
          variants={variant}
          initial="initial"
          animate="animate"
        >
          <Link href="/#about" passHref>
            <a className="transition-all hover:text-gray-500">About</a>
          </Link>
          <Link href="/#projects" passHref>
            <a className="transition-all hover:text-gray-500">Projects</a>
          </Link>
          <Link href="/#contact" passHref>
            <a className="transition-all hover:text-gray-500">Contact</a>
          </Link>
        </motion.div>
      </nav>
      <nav>{isOpen ? <Menu clickHandler={clickHandler} /> : null}</nav>
    </>
  )
}

export default Nav
