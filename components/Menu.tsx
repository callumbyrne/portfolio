import Link from 'next/link'

interface Props {
  clickHandler: React.MouseEventHandler<HTMLAnchorElement>
}

const Menu = ({ clickHandler }: Props) => {
  return (
    <nav className="fixed inset-0 z-40 flex w-full flex-col items-center justify-center overflow-hidden bg-black py-24 text-[20vw] font-bold text-white md:hidden">
      <Link href="/" passHref>
        <a onClick={clickHandler}>Home</a>
      </Link>
      <Link href="/#about" passHref>
        <a onClick={clickHandler}>About</a>
      </Link>
      <Link href="/#projects" passHref>
        <a onClick={clickHandler}>Projects</a>
      </Link>
      <Link href="/#contact" passHref>
        <a onClick={clickHandler}>Contact</a>
      </Link>
    </nav>
  )
}

export default Menu
