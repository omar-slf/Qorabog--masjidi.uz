import * as React from 'react'
import { useRef } from 'react'
import { useDimensions } from './use-dimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const Example = () => {
  const [isOpen, toggleOpen] = React.useState(false )
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <div className='background' variants={sidebar} />
      <Navigation toggle={() => toggleOpen(!isOpen)} />
      <MenuToggle toggle={() => toggleOpen(!isOpen)} />
    </nav>
  )
}
