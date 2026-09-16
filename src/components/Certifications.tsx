import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import arcgisImageryMooc from '../assets/certificates/arcgis-imagery-mooc.png'
import modernGeoApps from '../assets/certificates/modern-geo-apps.png'
import sentinel1Sar from '../assets/certificates/sentinel-1-sar.png'
import spatialDataScience from '../assets/certificates/spatial-data-science.png'
import cartography from '../assets/certificates/cartography.png'
import modernWebDevImg from '../assets/img1.png'
import authWebAppImg from '../assets/IMG2.png'
import arcgisProImg from '../assets/img3.png'
import arcpyImg from '../assets/arcpy.png'

const certifications = [
  { title: 'Spatial Data Science: The New Frontier in Analytics', issuer: 'Esri', dateKey: 'certifications.date1', image: spatialDataScience, pdf: '/certificates/spatial-data-science.pdf' },
  { title: 'The ArcGIS Imagery MOOC: Foundations and Frontiers', issuer: 'Esri', dateKey: 'certifications.date2', image: arcgisImageryMooc, pdf: '/certificates/arcgis-imagery-mooc.pdf' },
  { title: 'Cartography', issuer: 'Esri', dateKey: 'certifications.date3', image: cartography, pdf: '/certificates/cartography.pdf' },
  { title: 'Make an Impact with Modern Geo Apps', issuer: 'Esri', dateKey: 'certifications.date4', image: modernGeoApps, pdf: '/certificates/modern-geo-apps.pdf' },
  { title: 'Processing SAR Data in ArcGIS Notebooks', issuer: 'Esri', dateKey: 'certifications.date5', image: sentinel1Sar, pdf: '/certificates/sentinel-1-sar.pdf' },
  { title: 'Essentials for ArcPy: Python for Geospatial Automation', issuer: 'Udemy', dateKey: 'certifications.date6', image: arcpyImg, pdf: '/certificates/arcpy-geospatial-automation.pdf' },
  { title: 'Exploring ArcGIS Pro: GIS Tutorials from Basics to Advanced', issuer: 'Udemy', dateKey: 'certifications.date6', image: arcgisProImg, pdf: '/certificates/arcgis-pro-tutorials.pdf' },
  { title: 'Build a Complete Authentication & Authorization Web App', issuer: 'Udemy', dateKey: 'certifications.date6', image: authWebAppImg, pdf: '/certificates/auth-web-app.pdf' },
  { title: 'Modern Web Development with JavaScript, jQuery & TypeScript', issuer: 'Udemy', dateKey: 'certifications.date6', image: modernWebDevImg, pdf: '/certificates/modern-web-dev.pdf' }
]

function Certifications() {
  const { t } = useTranslation()
  const { isDark } = useTheme()

  const bg = 'transparent'
  const cardBg = isDark ? '#111827' : '#ffffff'
  const textPrimary = isDark ? '#f9fafb' : '#111827'
  const textSecondary = isDark ? '#9ca3af' : '#6b7280'
  const border = isDark ? '#1f2937' : '#e4e4e7'
  const imageBg = isDark ? '#161e2e' : '#f4f4f5'

  return (
    <section id="certifications" className="section-spacing" style={{ background: bg }}>
      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="text-label" style={{ color: '#d6157d' }}>{t('certifications.label')}</span>
          <h2 className="text-heading" style={{ color: textPrimary, marginTop: '0.75rem' }}>
            {t('certifications.heading')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '1.5rem' }}>
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.pdf}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="card-hover"
              style={{
                background: cardBg,
                border: '1px solid ' + border,
                borderRadius: '1.25rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none'
              }}
            >
              <div style={{ background: imageBg, aspectRatio: '1684 / 1190', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <span style={{ fontSize: '1.8rem', fontWeight: 900, color: '#d6157d', opacity: 0.35, letterSpacing: '-0.02em' }}>
                    {cert.issuer}
                  </span>
                )}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: textPrimary, lineHeight: 1.5, marginBottom: '0.75rem' }}>
                  {cert.title}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="text-label" style={{ color: '#d6157d' }}>{cert.issuer}</span>
                  <span style={{ fontSize: '0.75rem', color: textSecondary }}>{t(cert.dateKey)}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Certifications
