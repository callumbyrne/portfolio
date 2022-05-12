import mtb from '../public/mtb.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

const variant = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 120,
    transition: {
      ease: 'easeInOut',
      duration: 0.6,
    },
  },
}

const mobileVariant = {
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

const About = () => {
  const isMobile = window.innerWidth < 1024 ? true : false

  return (
    <section className="about-section font-Inter" id="about">
      <div className="flex flex-col justify-between lg:flex-row lg:pl-16 xl:pl-36">
        <div className="flex flex-col justify-end p-5 lg:w-2/3 xl:pr-36">
          {/* <h2 className="pb-7 pt-20 text-8xl font-bold lg:text-9xl">
            ABOUT ME
          </h2> */}
          <p className="pb-7 text-2xl lg:text-4xl">
            I am a <b>full stack developer</b> with a passion for both front and
            back-end development and the technologies and problem solving they
            involve. I have a bachelor’s degree in <b>Civil Engineering</b>,
            however have found a passion in software development. I specialise
            in building full stack applications using tools such as{' '}
            <b>JavaScript</b>, <b>React</b>, and <b>Node</b>, and am eager to
            continually expand on my knowledge and develop my skills.
          </p>
          <p className="text-2xl lg:pb-20 lg:text-4xl">
            When I’m not studying or working, I love spending time outdoors with
            my family and friends or riding down hills as fast as I can on my
            mountain bike.
          </p>
        </div>
        <motion.div
          className="flex h-[400px] lg:h-auto lg:w-2/5 lg:translate-y-36 lg:object-cover lg:pr-10"
          variants={isMobile ? mobileVariant : variant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.8 }}
        >
          <Image
            src={mtb}
            alt="mtb"
            objectFit="cover"
            objectPosition="right"
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About
