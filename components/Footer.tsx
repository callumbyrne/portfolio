import Image from 'next/image'
import arrow from '../public/arrow.png'

const Footer = () => {
  return (
    <section className="bg-black px-5 py-20 text-white" id="contact">
      <h2 className="jus flex pb-1 text-6xl font-bold md:text-8xl">
        Contact Me
      </h2>
      <div className="flex flex-row items-center">
        <h3 className="text-3xl md:text-5xl">Email</h3>
        <div className="relative h-8 w-8 invert">
          <Image src={arrow} alt="arrow" layout="fill" objectFit="scale-down" />
        </div>
      </div>
    </section>
  )
}

export default Footer
