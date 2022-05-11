// import { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'

// interface Props {
//   setLoading: Dispatch<SetStateAction<boolean>>
// }

const variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
}

const Loader = () => {
  return (
    <motion.div className="flex h-[100vh] w-full items-center justify-center">
      <motion.h2
        className="font-Inter text-6xl font-bold sm:text-7xl lg:text-8xl xl:text-9xl"
        layoutId="hello"
        variants={variants}
        initial="hidden"
        animate="show"
      >
        Hello!
      </motion.h2>
    </motion.div>
  )
}

export default Loader
