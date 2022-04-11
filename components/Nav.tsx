import Link from 'next/link'

const Nav = () => {
  return (
    <div className="flex justify-between border py-8">
      <div className="flex items-center border">
        <Link href="/">
          <img
            className="cursor-pointer object-contain"
            src="/CallumByrne.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="hidden space-x-5 border font-sans text-3xl font-bold md:inline-flex">
        <h2>About</h2>
        <h2>Projects</h2>
        <h2>Contact</h2>
      </div>
    </div>
  )
}

export default Nav
