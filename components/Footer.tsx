import { motion } from 'framer-motion'

const mainVariant = {
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

const subVariant = {
  initial: {
    opacity: 0,
    y: -50,
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

const Footer = () => {
  return (
    <section
      className="bg-black px-5 py-20 font-Inter text-white lg:px-16 xl:px-36 xl:py-40"
      id="contact"
    >
      <motion.h2
        className="flex pb-2 text-6xl font-bold sm:text-7xl md:text-8xl lg:pb-3 lg:text-8xl xl:pb-8 xl:text-9xl"
        variants={mainVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 1 }}
      >
        CONTACT ME
      </motion.h2>
      <motion.div
        className="flex flex-row items-center text-xl underline underline-offset-4 sm:text-3xl md:text-4xl xl:text-5xl"
        variants={subVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 1 }}
      >
        <a href="mailto:callumjbyrne97@gmail.com" className="pr-10">
          EMAIL
        </a>
        <a
          target="_blank"
          href="https://github.com/callumbyrne"
          rel="noopener noreferrer"
          className="pr-10"
        >
          GITHUB
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/callumjbyrne/"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
      </motion.div>
    </section>
  )
}

export default Footer
