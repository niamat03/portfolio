import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

function About() {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  const transversalSkills = t('about.skills', { returnObjects: true }) as string[]

  const bg = 'transparent'
  const cardBg = isDark ? '#111827' : '#ffffff'
  const textPrimary = isDark ? '#f9fafb' : '#111827'
  const textSecondary = isDark ? '#9ca3af' : '#6b7280'
  const border = isDark ? '#1f2937' : '#e4e4e7'
  const tagBg = isDark ? '#161e2e' : '#ffffff'

  return (
    <section id="about" className="section-spacing" style={{ background: bg }}>
      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4.5rem' }}
        >
          <span className="text-label" style={{ color: '#d6157d' }}>{t('about.label')}</span>
          <h2 className="text-heading" style={{ color: textPrimary, marginTop: '0.75rem' }}>
            {t('about.heading')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: '2.5rem', alignItems: 'start' }}>

          {/* Bloc texte — 7 colonnes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 card-hover"
            style={{ background: cardBg, border: '1px solid ' + border, borderRadius: '1.25rem', padding: '2.5rem' }}
          >
            <p style={{ color: textSecondary, fontSize: '1rem', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              {t('about.texte1')}
            </p>
            <p style={{ color: textSecondary, fontSize: '1rem', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              {t('about.texte2')}
            </p>
            <p style={{ color: textSecondary, fontSize: '1rem', lineHeight: '1.85', marginBottom: '2.5rem' }}>
              {t('about.texte3')}
            </p>

            <div style={{ borderTop: '1px solid ' + border, paddingTop: '2rem' }}>
              <span className="text-label" style={{ color: '#d6157d', display: 'block', marginBottom: '1.25rem' }}>{t('about.competencesLabel')}</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {transversalSkills.map(s => (
                  <span
                    key={s}
                    style={{
                      background: tagBg,
                      color: textSecondary,
                      border: '1px solid ' + border,
                      borderRadius: '0.5rem',
                      padding: '0.5rem 1rem',
                      fontSize: '0.8rem',
                      fontWeight: 500
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bloc infos — 5 colonnes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* Expérience */}
            <div
              className="card-hover"
              style={{ background: cardBg, border: '1px solid ' + border, borderRadius: '1.25rem', padding: '2rem' }}
            >
              <span className="text-label" style={{ color: '#d6157d', display: 'block', marginBottom: '1.25rem' }}>{t('about.experienceLabel')}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <p style={{ fontSize: '0.95rem', fontWeight: 700, color: textPrimary, marginBottom: '0.35rem' }}>
                    {t('about.job1Title')}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: textSecondary, marginBottom: '0.5rem' }}>
                    {t('about.job1Place')}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: textSecondary, lineHeight: 1.6 }}>
                    {t('about.job1Desc')}
                  </p>
                </div>
                <div style={{ borderTop: '1px solid ' + border, paddingTop: '1.25rem' }}>
                  <p style={{ fontSize: '0.95rem', fontWeight: 700, color: textPrimary, marginBottom: '0.35rem' }}>
                    {t('about.job2Title')}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: textSecondary }}>
                    {t('about.job2Place')}
                  </p>
                </div>
              </div>
            </div>

            {/* Infos */}
            {[
              { label: t('about.labelUniversite'), value: t('about.valueUniversite') },
              { label: t('about.labelFormation'), value: t('about.valueFormation') },
              { label: t('about.labelLocalisation'), value: t('about.valueLocalisation') },
              { label: t('about.labelLangues'), value: t('about.valueLangues') }
            ].map(item => (
              <div
                key={item.label}
                className="card-hover"
                style={{ background: cardBg, border: '1px solid ' + border, borderRadius: '1rem', padding: '1.25rem 1.75rem' }}
              >
                <span className="text-label" style={{ color: '#d6157d', display: 'block', marginBottom: '0.3rem' }}>{item.label}</span>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: textPrimary }}>{item.value}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
