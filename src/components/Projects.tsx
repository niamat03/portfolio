import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import geoAssistImg from '../assets/geoassist-plugin.jpeg'
import ticketPlatformImg from '../assets/ticket-platform.png'
import geoCalcImg from '../assets/calcul geodesique.png'
import expansionUrbaineImg from '../assets/expansion urbaine Tanger .png'
import socialMediaImg from '../assets/social media platforme.png'
import ecommerceImg from '../assets/ecommerce.png'
import cancerPancreasImg from '../assets/cancer pancreas.png'
import selenaImg from '../assets/platforme managment project selena .png'

const projects = [
  { id: 6, title: "Suivi de l'Expansion Urbaine — Grand Tanger", categoryKey: 'catTeledetection', descKey: 'p6Desc', technologies: ['Python', 'Random Forest', 'Sentinel-2'], github: 'https://github.com/niamat03/tanger-urban-expansion-rf', image: expansionUrbaineImg },
  { id: 1, title: 'Plugin QGIS — PyQGIS', categoryKey: 'catTeledetection', descKey: 'p1Desc', technologies: ['Python', 'PyQGIS', 'QGIS'], github: 'https://github.com/niamat03/geo-assist', image: geoAssistImg },
  { id: 5, title: 'Plateforme WebSIG — CAN 2025', categoryKey: 'catWebsig', descKey: 'p5Desc', technologies: ['PHP', 'MySQL', 'Leaflet'], github: 'https://github.com/niamat03/can2026-billetterie', image: ticketPlatformImg },
  { id: 3, title: 'Analyse SIG — Cancer du Pancréas', categoryKey: 'catAnalyse', descKey: 'p3Desc', technologies: ['Tkinter', 'Python', 'ArcGIS'], github: 'https://github.com/niamat03/cartographie-analyse-cancer-pancreas-maroc', image: cancerPancreasImg },
  { id: 4, title: 'Application Calcul Géodésique', categoryKey: 'catGeodesie', descKey: 'p4Desc', technologies: ['PyQt6', 'Python'], github: 'https://github.com/niamat03/plateforme-calcul-geodesique', image: geoCalcImg },
  { id: 8, title: 'Plateforme Social Media Géolocalisée', categoryKey: 'catWebsig', descKey: 'p8Desc', technologies: ['Django', 'PostgreSQL', 'PostGIS'], github: 'https://github.com/niamat03/social-media', image: socialMediaImg },
  { id: 9, title: 'Selena — Plateforme de Gestion de Projet', categoryKey: 'catDev', descKey: 'p9Desc', technologies: ['TypeScript', 'React', 'Node.js'], github: 'https://github.com/niamat03/project-management-platform', image: selenaImg },
  { id: 10, title: 'Marketplace E-commerce Multi-catégories', categoryKey: 'catDev', descKey: 'p10Desc', technologies: ['Node.js', 'Express', 'PostgreSQL', 'PayPal'], github: 'https://github.com/niamat03/ecommerce-store', image: ecommerceImg }
]

const categoryKeys = ['filterAll', 'catWebsig', 'catTeledetection', 'catAnalyse', 'catGeodesie', 'catDev']

function Projects() {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  const [activeFilter, setActiveFilter] = useState('filterAll')

  const bg = 'transparent'
  const cardBg = isDark ? '#111827' : '#ffffff'
  const textPrimary = isDark ? '#f9fafb' : '#111827'
  const textSecondary = isDark ? '#9ca3af' : '#6b7280'
  const border = isDark ? '#1f2937' : '#e4e4e7'
  const tagBg = isDark ? '#161e2e' : '#ffffff'
  const imageBg = isDark ? '#161e2e' : '#ffffff'

  const filtered = activeFilter === 'filterAll' ? projects : projects.filter(p => p.categoryKey === activeFilter)

  return (
    <section id="projets" className="section-spacing" style={{ background: bg }}>
      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="text-label" style={{ color: '#d6157d' }}>{t('projects.label')}</span>
          <h2 className="text-heading" style={{ color: textPrimary, marginTop: '0.75rem' }}>
            {t('projects.heading')}
          </h2>
        </motion.div>

        {/* Filtres */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '3rem' }}>
          {categoryKeys.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="text-label transition-all duration-200"
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '0.625rem',
                background: activeFilter === cat ? '#d6157d' : cardBg,
                color: activeFilter === cat ? '#fff' : textSecondary,
                border: '1px solid ' + (activeFilter === cat ? '#d6157d' : border),
                cursor: 'pointer'
              }}
            >
              {t('projects.' + cat)}
            </button>
          ))}
        </div>

        <AnimatePresence>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '1.5rem' }}>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-hover"
                style={{
                  background: cardBg,
                  border: '1px solid ' + border,
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Image */}
                <div style={{ background: imageBg, height: '17rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  {project.image
                    ? <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : (
                      <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#d6157d' }}>{t('projects.imageSoon')}</p>
                        <p style={{ fontSize: '0.7rem', color: textSecondary, marginTop: '0.25rem' }}>{t('projects.imageCaption')}</p>
                      </div>
                    )
                  }
                  <span
                    className="text-label"
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(214,21,125,0.9)',
                      color: '#fff',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '0.5rem'
                    }}
                  >
                    {t('projects.' + project.categoryKey)}
                  </span>
                </div>

                {/* Contenu */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: textPrimary, marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: textSecondary, flex: 1, marginBottom: '1.25rem' }}>
                    {t('projects.' + project.descKey)}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        style={{
                          background: tagBg,
                          color: textSecondary,
                          border: '1px solid ' + border,
                          borderRadius: '0.4rem',
                          padding: '0.3rem 0.7rem',
                          fontSize: '0.72rem',
                          fontWeight: 500
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '0.82rem', fontWeight: 700, color: '#d6157d' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    {t('projects.githubLink')} →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Projects
