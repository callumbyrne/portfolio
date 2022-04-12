import mtb from '../public/mtb.png'
import Image from 'next/image'

const About = () => {
  return (
    <div className="about-section flex flex-row pl-20">
      <div className="flex w-8/12 flex-col justify-end pb-28 text-white">
        <h2 className="pb-8 text-8xl font-bold">About me</h2>
        <p className="pb-8 text-2xl">
          I am a full stack developer from Melbourne with a passion for both
          front and back-end development and the technologies and problem
          solving they involve. I have a bachelor’s degree in Civil Engineering,
          however have found a passion in software development. I specialise in
          building full stack applications using tools such as JavaScript and
          React and am eager to continually expand on my knowledge and develop
          my skills.
        </p>
        <p className="text-2xl">
          When I’m not studying or working, I love spending time outdoors with
          my family and friends or riding down hills as fast as I can on my
          mountain bike.
        </p>
      </div>
      <div className="flex w-5/12">
        <Image
          src={mtb}
          alt="mtb"
          height={695}
          objectFit="cover"
          objectPosition={-200}
        />
      </div>
    </div>
  )
}

export default About
