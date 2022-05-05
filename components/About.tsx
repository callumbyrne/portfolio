import mtb from '../public/mtb.png'
import Image from 'next/image'

const About = () => {
  return (
    <section className="about-section flex flex-col justify-between" id="about">
      <div className="flex flex-col justify-end p-5 text-white">
        <h2 className="pb-7 pt-6 text-8xl font-bold">About me</h2>
        <p className="pb-7 text-2xl">
          I am a full stack developer with a passion for both front and back-end
          development and the technologies and problem solving they involve. I
          have a bachelor’s degree in Civil Engineering, however have found a
          passion in software development. I specialise in building full stack
          applications using tools such as JavaScript, React, and Node, and am
          eager to continually expand on my knowledge and develop my skills.
        </p>
        <p className="text-2xl">
          When I’m not studying or working, I love spending time outdoors with
          my family and friends or riding down hills as fast as I can on my
          mountain bike.
        </p>
      </div>
      <div className="flex" style={{ height: '400px' }}>
        <Image
          src={mtb}
          alt="mtb"
          objectFit="cover"
          objectPosition="right"
          quality={100}
        />
      </div>
    </section>
  )
}

export default About
