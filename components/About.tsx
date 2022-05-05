import mtb from '../public/mtb.png'
import Image from 'next/image'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="flex flex-col justify-between lg:flex-row lg:pl-16 xl:pl-36">
        <div className="flex flex-col justify-end p-5 text-white lg:w-2/3 xl:pr-36">
          <h2 className="pb-7 pt-36 text-8xl font-bold">About me</h2>
          <p className="pb-7 text-2xl">
            I am a full stack developer with a passion for both front and
            back-end development and the technologies and problem solving they
            involve. I have a bachelor’s degree in Civil Engineering, however
            have found a passion in software development. I specialise in
            building full stack applications using tools such as JavaScript,
            React, and Node, and am eager to continually expand on my knowledge
            and develop my skills.
          </p>
          <p className="pb-20 text-2xl">
            When I’m not studying or working, I love spending time outdoors with
            my family and friends or riding down hills as fast as I can on my
            mountain bike.
          </p>
        </div>
        <div className="flex h-[400px] lg:h-auto lg:w-1/3 lg:object-cover">
          <Image
            src={mtb}
            alt="mtb"
            objectFit="cover"
            objectPosition="right"
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}

export default About
