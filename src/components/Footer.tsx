import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

function Footer() {
  const { t } = useTranslation()
  const { isDark } = useTheme()

  const bg = 'transparent'
  const textPrimary = isDark ? '#f9fafb' : '#111827'
  const textSecondary = isDark ? '#4b5563' : '#9ca3af'
  const border = isDark ? '#1f2937' : '#e4e4e7'

  return (
    <footer style={{ background: bg, borderTop: '1px solid ' + border, padding: '2.5rem 0' }}>
      <div className="container-xl">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>

          <div>
            <span style={{ fontWeight: 900, fontSize: '1.1rem', color: textPrimary }}>
              EL QASEMY<span style={{ color: '#d6157d' }}>.</span>
            </span>
            <p style={{ fontSize: '0.75rem', color: textSecondary, marginTop: '0.35rem' }}>
              {t('footer.role')}
            </p>
          </div>

          <p style={{ fontSize: '0.75rem', color: textSecondary }}>
            {t('footer.rights')}
          </p>

          <div style={{ display: 'flex', gap: '2rem' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/niamat03' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/niamat-el-qasemy-271915312/' }
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '0.85rem', fontWeight: 600, color: textSecondary, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#d6157d'}
                onMouseLeave={e => e.currentTarget.style.color = textSecondary}
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
