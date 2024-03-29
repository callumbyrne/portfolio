import Nav from './Nav'
import Image from 'next/image'
import Marquee from './Marquee'
import { motion } from 'framer-motion'
import smiley from '../public/smiley.png'

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
      {words.map((word, index) => {
        if (word === 'Callum.') {
          return (
            <motion.span
              key={word + index}
              variants={wordVariant}
              style={{ display: 'inline-block' }}
              className={'leading-none underline underline-offset-4'}
            >
              {`${word}`}
            </motion.span>
          )
        }
        return (
          <motion.span
            key={word + index}
            variants={wordVariant}
            style={{ display: 'inline-block' }}
            className={`${
              word === 'Callum.' ? 'underline underline-offset-4' : null
            } leading-none`}
          >
            {`${word}`}&nbsp;
          </motion.span>
        )
      })}
    </motion.div>
  )
}

const Header = () => {
  return (
    <section className="relative z-20 flex w-full flex-col xl:pb-36">
      <Nav />
      <Marquee />
      <div className="xl:py-30 flex flex-col justify-center px-5 py-8 md:py-12 lg:flex-row lg:items-center lg:px-16 xl:py-16 xl:px-36">
        <div className="flex flex-col rounded-3xl pb-11 font-Inter text-6xl font-bold leading-none sm:text-7xl lg:text-8xl xl:text-9xl">
          <motion.h2
            layout="position"
            layoutId="hello"
            transition={{ duration: 0.6 }}
            className="w-10"
          >
            Hello!
          </motion.h2>

          <div className="absolute -z-10 flex w-full -translate-x-10 justify-end sm:-translate-x-16 lg:relative lg:-translate-y-20 lg:translate-x-5 xl:-translate-y-28 xl:translate-x-8">
            <motion.div
              className="absolute inline-flex h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] xl:h-[300px] xl:w-[300px] 2xl:h-[400px] 2xl:w-[400px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5 }}
            >
              <Image src={smiley} alt="smiley" priority />
            </motion.div>
          </div>

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
          className="flex flex-col space-y-8 font-Inter text-2xl font-light md:space-y-12 lg:space-y-24 xl:text-3xl"
        >
          <p className="flex justify-end text-right italic leading-loose">
            JavaScript, TypeScript, ReactJS, NextJS, NodeJS, Express, MongoDB,
            Jest
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
