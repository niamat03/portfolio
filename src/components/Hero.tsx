import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

interface Stat { value: string; labelKey: string }

function Hero() {
  const { t } = useTranslation()
  const { isDark } = useTheme()

  const bg = 'transparent'
  const textPrimary = isDark ? '#f9fafb' : '#111827'
  const textSecondary = isDark ? '#9ca3af' : '#6b7280'
  const cardBg = isDark ? '#111827' : '#ffffff'
  const border = isDark ? '#1f2937' : '#e4e4e7'

  return (
    <section
      id="accueil"
      className={isDark ? 'geo-grid' : undefined}
      style={{
        background: bg,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Glow blobs */}
      <div className="glow-dot" style={{ width: '500px', height: '500px', background: 'rgba(214,21,125,0.12)', top: '-100px', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="glow-dot" style={{ width: '300px', height: '300px', background: 'rgba(214,21,125,0.08)', bottom: '0', right: '10%' }} />

      <div className="container-xl" style={{ paddingTop: '8rem', paddingBottom: '6rem', position: 'relative', zIndex: 1 }}>

        {/* Centre */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-label inline-block rounded-full"
              style={{
                color: '#d6157d',
                background: 'rgba(214,21,125,0.1)',
                border: '1px solid rgba(214,21,125,0.25)',
                padding: '0.5rem 1.25rem',
                marginBottom: '2rem'
              }}
            >
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display"
            style={{ color: textPrimary, marginBottom: '0.5rem' }}
          >
            EL QASEMY
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display"
            style={{ color: '#d6157d', marginBottom: '2rem' }}
          >
            Niamat
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              color: textSecondary,
              fontSize: '1.1rem',
              lineHeight: '1.8',
              maxWidth: '560px',
              margin: '0 auto 3rem'
            }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}
          >
            <a
              href="#projets"
              style={{
                background: '#d6157d',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '0.9rem 2.25rem',
                borderRadius: '0.75rem',
                transition: 'all 0.2s ease',
                boxShadow: '0 0 30px rgba(214,21,125,0.3)'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#af1267'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#d6157d'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {t('hero.bouton')}
            </a>
            <a
              href="#contact"
              style={{
                color: textSecondary,
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '0.9rem 2.25rem',
                borderRadius: '0.75rem',
                border: '1px solid ' + border,
                background: cardBg,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#d6157d'; e.currentTarget.style.color = '#d6157d' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = textSecondary }}
            >
              {t('hero.contactBtn')}
            </a>
            <a
              href="https://linkedin.com/in/niamat-el-qasemy-271915312/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#d6157d',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '0.9rem 2.25rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(214,21,125,0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(214,21,125,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              {t('hero.linkedinBtn')} ↗
            </a>
            <a
              href="https://github.com/niamat03"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#d6157d',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '0.9rem 2.25rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(214,21,125,0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(214,21,125,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              {t('github')} ↗
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem',
              maxWidth: '500px',
              margin: '0 auto'
            }}
          >
            {([
              { value: '5+', labelKey: 'hero.statProjets' },
              { value: '7+', labelKey: 'hero.statCertificats' },
              { value: '3', labelKey: 'hero.statLangues' }
            ] as Stat[]).map(stat => (
              <div
                key={stat.labelKey}
                style={{
                  background: cardBg,
                  border: '1px solid ' + border,
                  borderRadius: '1rem',
                  padding: '1.5rem 1rem',
                  textAlign: 'center'
                }}
              >
                <p style={{ fontSize: '1.75rem', fontWeight: 900, color: '#d6157d', lineHeight: 1 }}>{stat.value}</p>
                <p style={{ fontSize: '0.75rem', color: textSecondary, marginTop: '0.4rem' }}>{t(stat.labelKey)}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: isDark ? '#374151' : '#d1d5db',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textAlign: 'center'
        }}
      >
        <div>{t('hero.scroll')}</div>
        <div style={{ marginTop: '0.4rem' }}>↓</div>
      </motion.div>
    </section>
  )
}

export default Hero
