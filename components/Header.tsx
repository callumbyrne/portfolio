import Nav from './Nav'
import Image from 'next/image'
import Marquee from './Marquee'
import { motion } from 'framer-motion'

const headerVariant = {
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
}

const wordVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.6,
    },
  },
}

interface IAnimatedWords {
  text: string
}

const AnimatedWords = ({ text }: IAnimatedWords) => {
  const words = text.split(' ')

  return (
    <motion.div variants={headerVariant} initial="initial" animate="animate">
      {words.map((word, index) => (
        <motion.span
          key={word + index}
          variants={wordVariant}
          style={{ display: 'inline-block' }}
          className="leading-tight"
        >
          {`${word}`}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  )
}

const Header = () => {
  return (
    <section className="flex w-full flex-col xl:h-[100vh]">
      <Nav />
      <Marquee />
      <div className="flex flex-col justify-center px-5 py-8 md:py-28 lg:flex-row lg:items-center lg:py-40 lg:px-16 xl:h-full xl:px-36 xl:py-0">
        <div className="flex flex-col rounded-3xl pb-11 text-6xl font-bold leading-tight lg:text-7xl xl:text-8xl">
          <motion.h2
            layout="position"
            layoutId="hello"
            transition={{ duration: 0.6 }}
            className="w-10"
          >
            Hello!
          </motion.h2>
          <motion.div
            variants={headerVariant}
            initial="initial"
            animate="animate"
          >
            <AnimatedWords text={`I'm Callum.`} />
            <AnimatedWords
              text={`A full stack developer based in Melbourne.`}
            />
          </motion.div>
        </div>

        <motion.div
          variants={wordVariant}
          initial="initial"
          animate="animate"
          className="flex flex-col space-y-8 text-2xl md:space-y-12 lg:space-y-24 xl:text-3xl"
        >
          <p className="flex justify-end text-right italic leading-loose">
            HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, NodeJS, Express,
            MongoDB, Jest, Cypress
          </p>
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
        </motion.div>
      </div>
    </section>
  )
}

export default Header
