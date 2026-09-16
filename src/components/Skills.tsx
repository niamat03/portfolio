import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

const skillSets = [
  { titleKey: 'skills.cat1', skills: ['ArcGIS Pro', 'ArcGIS Online', 'QGIS', 'Arcmap', 'Global Mapper', 'Google Earth Pro', 'Google Earth Engine', 'ENVI', 'Erdas Imagine', 'GeoAI'] },
  { titleKey: 'skills.cat2', skills: ['JavaScript', 'TypeScript', 'React', 'Python', 'PHP', 'Java', 'C', 'C++', 'Django', 'FastAPI', 'Express.js'] },
  { titleKey: 'skills.cat3', skills: ['Leaflet', 'OpenLayers', 'Geoserver', 'QGIS Server', 'MapServer'] },
  { titleKey: 'skills.cat4', skills: ['MySQL', 'PostgreSQL', 'PostGIS', 'NoSQL'] },
  { titleKey: 'skills.cat5', skills: ['AutoCAD', 'GéoAcadémie', 'Philcarto', 'PyQt6', 'Tkinter'] },
  { titleKey: 'skills.cat6', skills: ['Hadoop', 'Spark'] }
]

function Skills() {
  const { t } = useTranslation()
  const { isDark } = useTheme()

  const bg = 'transparent'
  const cardBg = isDark ? '#111827' : '#ffffff'
  const textPrimary = isDark ? '#f9fafb' : '#111827'
  const textSecondary = isDark ? '#9ca3af' : '#6b7280'
  const border = isDark ? '#1f2937' : '#e4e4e7'
  const tagBg = isDark ? '#161e2e' : '#ffffff'

  return (
    <section id="competences" className="section-spacing" style={{ background: bg }}>
      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4.5rem' }}
        >
          <span className="text-label" style={{ color: '#d6157d' }}>{t('skills.label')}</span>
          <h2 className="text-heading" style={{ color: textPrimary, marginTop: '0.75rem' }}>
            {t('skills.heading')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '1.5rem' }}>
          {skillSets.map((cat, i) => (
            <motion.div
              key={cat.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-hover"
              style={{ background: cardBg, border: '1px solid ' + border, borderRadius: '1.25rem', padding: '2rem' }}
            >
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: textPrimary, marginBottom: '1.25rem' }}>
                {t(cat.titleKey)}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    style={{
                      background: tagBg,
                      color: textSecondary,
                      border: '1px solid ' + border,
                      borderRadius: '0.5rem',
                      padding: '0.4rem 0.85rem',
                      fontSize: '0.78rem',
                      fontWeight: 500
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
