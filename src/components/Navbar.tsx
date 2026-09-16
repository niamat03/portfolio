import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bg = scrolled
    ? isDark ? 'rgba(8,12,20,0.97)' : 'rgba(255,255,255,0.97)'
    : 'transparent'

  const borderB = scrolled
    ? isDark ? '1px solid #1f2937' : '1px solid #e4e4e7'
    : 'none'

  const textColor = isDark ? '#d1d5db' : '#4b5563'
  const logoColor = isDark ? '#f9fafb' : '#111827'

  const links = [
    { key: 'accueil', href: '#accueil' },
    { key: 'about', href: '#about' },
    { key: 'projets', href: '#projets' },
    { key: 'contact', href: '#contact' }
  ]

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50"
        style={{
          background: bg,
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: borderB,
          transition: 'all 0.35s ease'
        }}
      >
        <div className="container-xl flex items-center justify-between" style={{ height: '5rem' }}>

          <span className="font-black text-xl tracking-tight" style={{ color: logoColor }}>
            EL QASEMY<span style={{ color: '#d6157d' }}>.</span>
          </span>

          <ul className="hidden lg:flex list-none items-center" style={{ gap: '2.5rem' }}>
            {links.map(item => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: textColor }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#d6157d')}
                  onMouseLeave={e => (e.currentTarget.style.color = textColor)}
                >
                  {t('nav.' + item.key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center" style={{ gap: '1rem' }}>
            <div className="flex" style={{ gap: '0.4rem' }}>
              {['fr', 'en', 'ar'].map(lang => (
                <button
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  className="text-label rounded-lg transition-all duration-200"
                  style={{
                    padding: '0.45rem 0.85rem',
                    background: i18n.language === lang ? '#d6157d' : 'transparent',
                    color: i18n.language === lang ? '#fff' : textColor,
                    border: '1px solid ' + (i18n.language === lang ? '#d6157d' : isDark ? '#1f2937' : '#e4e4e7')
                  }}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                width: '2.75rem',
                height: '2.75rem',
                background: isDark ? '#111827' : '#ffffff',
                border: '1px solid ' + (isDark ? '#1f2937' : '#e4e4e7'),
                color: isDark ? '#f9fafb' : '#111827',
                fontSize: '1rem'
              }}
            >
              {isDark ? '☀' : '☾'}
            </button>
          </div>

          <button
            className="lg:hidden rounded-xl transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              padding: '0.6rem 0.9rem',
              background: isDark ? '#111827' : '#ffffff',
              color: isDark ? '#f9fafb' : '#111827',
              border: '1px solid ' + (isDark ? '#1f2937' : '#e4e4e7')
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed w-full z-40 lg:hidden"
          style={{
            top: '5rem',
            background: isDark ? '#080c14' : '#ffffff',
            borderBottom: '1px solid ' + (isDark ? '#1f2937' : '#e4e4e7')
          }}
        >
          <div className="container-xl flex flex-col" style={{ padding: '2rem 0', gap: '1.5rem' }}>
            {links.map(item => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold"
                style={{ color: textColor }}
              >
                {t('nav.' + item.key)}
              </a>
            ))}
            <div className="flex items-center" style={{ gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid ' + (isDark ? '#1f2937' : '#e4e4e7') }}>
              {['fr', 'en', 'ar'].map(lang => (
                <button
                  key={lang}
                  onClick={() => { i18n.changeLanguage(lang); setMenuOpen(false) }}
                  className="text-label rounded-lg"
                  style={{
                    padding: '0.5rem 1rem',
                    background: i18n.language === lang ? '#d6157d' : 'transparent',
                    color: i18n.language === lang ? '#fff' : textColor,
                    border: '1px solid ' + (i18n.language === lang ? '#d6157d' : isDark ? '#1f2937' : '#e4e4e7')
                  }}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
              <button
                onClick={() => { toggleTheme(); setMenuOpen(false) }}
                className="ml-auto text-sm font-semibold rounded-xl"
                style={{
                  padding: '0.5rem 1rem',
                  background: isDark ? '#111827' : '#ffffff',
                  color: isDark ? '#f9fafb' : '#111827'
                }}
              >
                {isDark ? t('nav.modeClair') : t('nav.modeSombre')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
