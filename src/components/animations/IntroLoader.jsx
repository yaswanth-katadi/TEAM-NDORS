
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../../assets/images/ndors-logo-optimized.png'
import './IntroLoader.css'

function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let pageReady = document.readyState === 'complete'
    let finished = false
    const startTime = Date.now()
    let completionTimer

    const minimumDuration = 2600

    const handlePageReady = () => {
      pageReady = true
    }

    if (!pageReady) {
      window.addEventListener('load', handlePageReady, { once: true })
    }

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime

      const nextProgress = Math.min(
        92,
        Math.floor((elapsed / minimumDuration) * 92)
      )

      setProgress(nextProgress)

      if (pageReady && elapsed >= minimumDuration && !finished) {
        finished = true
        clearInterval(interval)
        setProgress(100)

        completionTimer = setTimeout(() => {
          setIsVisible(false)
        }, 450)
      }
    }, 80)

    return () => {
      clearInterval(interval)
      clearTimeout(completionTimer)
      window.removeEventListener('load', handlePageReady)
    }
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.75, ease: 'easeInOut' },
          }}
        >
          {/* Background video */}
          <video
            className="intro-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/videos/ndors-intro.mp4" type="video/mp4" />
          </video>

          {/* Uniform dark overlay */}
          <div className="intro-overlay" />

          {/* Subtle red atmospheric glow */}
          <div className="intro-red-atmosphere" />

          {/* Main loading content */}
          <div className="intro-content">

            <motion.div
              className="intro-logo-wrapper"
              initial={{ opacity: 0, scale: 0.88, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={logo}
                alt="NDORS Racing"
                className="intro-logo"
              />
            </motion.div>

            <motion.h1
              className="intro-title"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span>TEAM</span>{' '}
              <span className="intro-title-red">NDORS</span>
            </motion.h1>

            <motion.div
              className="intro-location"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              <span />
              NIT DURGAPUR
              <span />
            </motion.div>

            <motion.p
              className="intro-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              ENGINEERING <strong>BEYOND LIMITS.</strong>
            </motion.p>

            <motion.div
              className="intro-progress-section"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
            >
              <div className="intro-progress-info">
                <span>INITIALIZING EXPERIENCE</span>
                <span className="intro-percentage">
                  {progress}%
                </span>
              </div>

              <div
                className="intro-progress-track"
                role="progressbar"
                aria-label="Loading"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
              >
                <div
                  className="intro-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </div>

          {/* Racing corner accents */}
          <div className="intro-corner intro-corner-left" />
          <div className="intro-corner intro-corner-right" />

          <div className="intro-stripes intro-stripes-top" />
          <div className="intro-stripes intro-stripes-bottom" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroLoader
