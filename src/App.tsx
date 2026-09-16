import { useTheme } from './context/ThemeContext'
import StarField from './components/StarField'
import LightGeoField from './components/LightGeoField'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Certifications from './components/Certifications'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { isDark } = useTheme()

  return (
    <>
      <StarField />
      <LightGeoField />
      <div style={{
        position: 'relative',
        zIndex: 1,
        background: 'transparent',
        color: isDark ? '#f9fafb' : '#111827',
        minHeight: '100vh',
        transition: 'background 0.4s ease, color 0.4s ease'
      }}>
        <Navbar />
        <Hero />
        <About />
        <Certifications />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
