const TistorySVG = ({ fontSize = 26 }: { fontSize: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 408.4 408.4" style={{ width: `${fontSize - 2}px`, height: `${fontSize - 2}px` }}>
      <g>
        <circle className="cls-1" cx="58.18" cy="58.18" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="58.18" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="204.2" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="350.22" r="58.18" />
        <circle className="cls-1" cx="350.22" cy="58.18" r="58.18" />
      </g>
    </svg>
  )
}

export default TistorySVG
