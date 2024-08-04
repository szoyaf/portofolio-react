import { useRef, useState } from "react"

export default function IconButton({ children, text, color, href, ...props }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  const Component = href ? 'a' : 'button';

  return (
    <Component
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        flex p-2 items-center rounded-lg text-white ${color || "bg-gray-600"}`}
      href={href}
      {...props}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
      </div>
    </Component>
  )
}