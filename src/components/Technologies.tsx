import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

type Tech = { name: string; logo?: string }

const techGroups: { titleKey: string; items: Tech[] }[] = [
  {
    titleKey: 'skills.cat2',
    items: [
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'R', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
      { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' }
    ]
  },
  {
    titleKey: 'skills.cat1',
    items: [
      { name: 'QGIS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/QGIS_logo_new.svg' },
      { name: 'ArcGIS Pro' },
      { name: 'Arcmap' },
      { name: 'Global Mapper' },
      { name: 'Google Earth Pro' },
      { name: 'Google Earth Engine' },
      { name: 'ENVI' },
      { name: 'Erdas Imagine' }
    ]
  },
  {
    titleKey: 'skills.cat3',
    items: [
      { name: 'Leaflet', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Leaflet_logo.svg' },
      { name: 'OpenLayers', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/OpenLayers_logo.svg' },
      { name: 'GeoServer', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/GeoServer_logo.png' }
    ]
  },
  {
    titleKey: 'skills.cat4',
    items: [
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
    ]
  },
  {
    titleKey: 'skills.cat5',
    items: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'AutoCAD', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/AutoCad_logo.svg' }
    ]
  }
]

function Technologies() {
  const { t } = useTranslation()
  const { isDark } = useTheme()

  const bg = 'transparent'
  const cardBg = isDark ? '#111827' : '#ffffff'
  const textPrimary = isDark ? '#f9fafb' : '#111827'
  const textSecondary = isDark ? '#9ca3af' : '#6b7280'
  const border = isDark ? '#1f2937' : '#e4e4e7'

  return (
    <section id="technologies" className="section-spacing" style={{ background: bg }}>
      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="text-label" style={{ color: '#d6157d' }}>{t('technologies.label')}</span>
          <h2 className="text-heading" style={{ color: textPrimary, marginTop: '0.75rem' }}>
            {t('technologies.heading')}
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {techGroups.map(group => (
            <div key={group.titleKey}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: textPrimary, marginBottom: '1.25rem' }}>
                {t(group.titleKey)}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" style={{ gap: '1.25rem' }}>
                {group.items.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className="card-hover"
                    style={{
                      background: cardBg,
                      border: '1px solid ' + border,
                      borderRadius: '1rem',
                      padding: '1.75rem 1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.85rem',
                      cursor: 'pointer',
                      minHeight: '7.5rem'
                    }}
                  >
                    {tech.logo && (
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        style={{ width: '2.5rem', height: '2.5rem', objectFit: 'contain' }}
                        onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
                      />
                    )}
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: textSecondary, textAlign: 'center' }}>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Technologies
