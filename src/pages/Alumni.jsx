
import { useLayoutEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './Alumni.css'

gsap.registerPlugin(ScrollTrigger)

const images = Object.entries(
  import.meta.glob('../assets/images/alumni/*.{jpg,jpeg,png,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
).map(([path, src], index) => ({
  id: index,
  src,
  name: path
    .split('/')
    .pop()
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' '),
}))

function Alumni() {
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      // Hero entrance
      gsap.timeline({
        defaults: { ease: 'power3.out' },
      })
        .from('.alumni-hero-content .section-label', {
          y: 20,
          opacity: 0,
          duration: 0.6,
        })
        .from('.alumni-hero-content h1', {
          y: 55,
          opacity: 0,
          duration: 0.9,
        }, '-=0.3')
        .from('.alumni-hero-content p', {
          y: 20,
          opacity: 0,
          duration: 0.6,
        }, '-=0.4')

      // Introduction reveal
      gsap.from('.alumni-intro > *', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.alumni-intro',
          start: 'top 85%',
          once: true,
        },
      })

      // Gallery heading reveal
      gsap.from('.alumni-gallery-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.alumni-gallery-heading',
          start: 'top 90%',
          once: true,
        },
      })

      // Gallery images reveal
      const cards = gsap.utils.toArray('.alumni-photo-card')

      if (cards.length > 0) {
        gsap.from(cards, {
          y: 45,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.alumni-gallery',
            start: 'top 85%',
            once: true,
          },
        })
      }
    }, pageRef)

    return () => context.revert()
  }, [])

  return (
    <main className="alumni-page" ref={pageRef}>
      <section className="alumni-hero">
        <div className="alumni-hero-overlay" />

        <div className="alumni-hero-content">
          <span className="section-label">THE NDORS FAMILY</span>

          <h1>
            THE LEGACY
            <br />
            CONTINUES<span>.</span>
          </h1>

          <p>Different generations. One NDORS family.</p>
        </div>
      </section>

      <section className="alumni-intro">
        <span className="section-label">BEYOND THE FINISH LINE</span>

        <h2>
          MEMORIES THAT
          <br />
          STAY WITH US<span>.</span>
        </h2>

        <p>
          Every photograph tells a story of teamwork, engineering,
          challenges and friendships that make NDORS what it is.
        </p>
      </section>

      <section className="alumni-gallery-section">
        <div className="alumni-gallery-heading">
          <div>
            <span className="section-label">OUR JOURNEY</span>
            <h2>THE PEOPLE. THE MOMENTS.</h2>
          </div>

          <span className="alumni-photo-count">
            {String(images.length).padStart(2, '0')} PHOTOS
          </span>
        </div>

        {images.length > 0 ? (
          <div className="alumni-gallery">
            {images.map((photo, index) => (
              <article
                className={`alumni-photo-card ${
                  index % 5 === 0 ? 'photo-large' : ''
                }`}
                key={photo.src}
              >
                <img
                src={photo.src}
                alt={`NDORS memory: ${photo.name}`}
                loading="lazy"
                decoding="async"
               />

                <div className="alumni-photo-overlay">
                  <span>{photo.name}</span>
                  <ArrowUpRight size={20} />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="alumni-empty">
            Photos will appear here once they are added to the alumni folder.
          </p>
        )}
      </section>
    </main>
  )
}

export default Alumni
