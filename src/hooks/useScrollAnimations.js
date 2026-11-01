
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function useScrollAnimations() {
  const location = useLocation()

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const sections = gsap.utils.toArray(
        '.about-section, .vehicles-section, .stories-section, .director-section, .team-year-block'
      )

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })

      gsap.utils.toArray('.story-image img, .vehicle-image img').forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 1.06 },
          {
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: image,
              start: 'top 90%',
              once: true,
            },
          }
        )
      })
    })

    return () => context.revert()
  }, [location.pathname])
}

export default useScrollAnimations

