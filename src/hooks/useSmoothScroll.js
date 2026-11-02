
import { useEffect } from 'react'
import Lenis from 'lenis'

function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    })

    // Make Lenis accessible to page navigation
    window.__lenis = lenis

    let animationFrameId

    function raf(time) {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)

      if (window.__lenis === lenis) {
        delete window.__lenis
      }

      lenis.destroy()
    }
  }, [])
}

export default useSmoothScroll
