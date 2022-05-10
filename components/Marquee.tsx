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

const MarqueeSpan = () => {
  return (
    <span>
      {tools.map((tool) => (
        <span
          key={tool}
          className="cursor-default pr-8 font-IBM font-light hover:font-bold"
        >
          {tool}
        </span>
      ))}
    </span>
  )
}

const Marquee = () => {
  return (
    <div className="marquee border-y border-black bg-white text-black">
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
