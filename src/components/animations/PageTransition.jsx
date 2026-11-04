
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './PageTransition.css'

function PageTransition({ pathname }) {
  const previousPath = useRef(pathname)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (previousPath.current === pathname) return

    previousPath.current = pathname
    setActive(true)
  }, [pathname])

  return (
    <motion.div
      className="page-transition"
      initial={false}
      animate={
        active
          ? {
              clipPath: [
                'inset(0 100% 0 0)',
                'inset(0 0 0 0)',
                'inset(0 0 0 100%)',
              ],
            }
          : {
              clipPath: 'inset(0 100% 0 0)',
            }
      }
      transition={{
      duration: 1.2,
      times: [0, 0.5, 1],
      ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => setActive(false)}
      aria-hidden="true"
    >
      <div className="page-transition-line" />
      <div className="page-transition-glow" />
      <div className="page-transition-label">
        NIT DURGAPUR OFF-ROAD SPORTS <span>///</span> NDORS
      </div>
    </motion.div>
  )
}

export default PageTransition
