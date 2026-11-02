
import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import IntroLoader from './components/animations/IntroLoader'
import PageTransition from './components/animations/PageTransition'

import useSmoothScroll from './hooks/useSmoothScroll'
import useScrollAnimations from './hooks/useScrollAnimations'

const Home = lazy(() => import('./pages/Home'))
const Teams = lazy(() => import('./pages/Teams'))
const Achievements = lazy(() => import('./pages/Achievements'))
const Alumni = lazy(() => import('./pages/Alumni'))
const Domains = lazy(() => import('./pages/Domains'))

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
}

function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true })

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })

    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Suspense fallback={<div className="route-loading">Loading...</div>}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/alumni" element={<Alumni />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const location = useLocation()

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  useSmoothScroll()
  useScrollAnimations()

  return (
    <>
      <Navbar />
      <AnimatedRoutes />
      <Footer />

      <PageTransition pathname={location.pathname} />

      {!introComplete && (
        <IntroLoader onComplete={handleIntroComplete} />
      )}
    </>
  )
}

export default App
