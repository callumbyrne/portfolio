import { motion } from 'framer-motion'

const tools = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'NextJS',
  'NodeJS',
  'Express',
  'MongoDB',
  'Jest',
  'Cypress',
]

const marqueeVariant = {
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

const MarqueeSpan = () => {
  return (
    <motion.span variants={marqueeVariant} initial="initial" animate="animate">
      {tools.map((tool) => (
        <motion.span
          key={tool}
          className="cursor-default pr-8 font-IBM font-light hover:font-bold"
          variants={wordVariant}
          style={{ display: 'inline-block' }}
        >
          {tool}
        </motion.span>
      ))}
    </motion.span>
  )
}

const Marquee = () => {
  return (
    <div className="marquee border-y border-black bg-[#e0e0e0] text-black">
      <div className="marquee_inner py-2">
        <MarqueeSpan />
        <MarqueeSpan />
        <MarqueeSpan />
        <MarqueeSpan />
      </div>
    </div>
  )
}

export default Marquee
