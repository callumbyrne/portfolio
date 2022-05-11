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
        className="flex pb-1 text-6xl font-bold md:text-8xl lg:text-9xl"
        variants={mainVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 1 }}
      >
        CONTACT ME
      </motion.h2>
      <motion.div
        className="flex flex-row items-center text-3xl underline underline-offset-4 md:text-5xl lg:text-6xl"
        variants={subVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 1 }}
      >
        <h3 className="pr-10">EMAIL</h3>
        <h3 className="pr-10">GITHUB</h3>
        <h3 className="pr-10">LINKEDIN</h3>
      </motion.div>
    </section>
  )
}

export default Footer
