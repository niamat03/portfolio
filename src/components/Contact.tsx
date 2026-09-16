import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useTranslation } from 'react-i18next'
import { sendEmail } from '../services/emailService'

function Contact() {
  const { isDark } = useTheme()
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const bg = 'transparent'
  const cardBg = isDark ? '#111827' : '#ffffff'
  const textPrimary = isDark ? '#f9fafb' : '#111827'
  const textSecondary = isDark ? '#9ca3af' : '#6b7280'
  const border = isDark ? '#1f2937' : '#e4e4e7'
  const inputBg = isDark ? '#080c14' : '#ffffff'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendEmail(formData)
      setStatus('success')
      setFormData({ nom: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-spacing" style={{ background: bg }}>
      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4.5rem' }}
        >
          <span className="text-label" style={{ color: '#d6157d' }}>{t('contact.label')}</span>
          <h2 className="text-heading" style={{ color: textPrimary, marginTop: '0.75rem' }}>
            {t('contact.heading')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: '3rem', alignItems: 'start' }}>

          {/* Infos — 4 colonnes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <p style={{ color: textSecondary, fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '0.5rem' }}>
              {t('contact.intro')}
            </p>
            {[
              { label: t('contact.labelLocalisation'), value: t('contact.valueLocalisation'), href: undefined },
              { label: t('contact.labelLinkedin'), value: 'niamat-el-qasemy-271915312', href: 'https://linkedin.com/in/niamat-el-qasemy-271915312/' },
              { label: t('contact.labelGithub'), value: 'niamat03', href: 'https://github.com/niamat03' }
            ].map(item => (
              <div
                key={item.label}
                className="card-hover"
                style={{ background: cardBg, border: '1px solid ' + border, borderRadius: '1rem', padding: '1.25rem 1.75rem' }}
              >
                <span className="text-label" style={{ color: '#d6157d', display: 'block', marginBottom: '0.3rem' }}>{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '0.9rem', fontWeight: 600, color: textPrimary, textDecoration: 'none' }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p style={{ fontSize: '0.9rem', fontWeight: 600, color: textPrimary }}>{item.value}</p>
                )}
              </div>
            ))}
          </motion.div>

          {/* Formulaire — 8 colonnes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 card-hover"
            style={{ background: cardBg, border: '1px solid ' + border, borderRadius: '1.25rem', padding: '3rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { name: 'nom', label: t('contact.nom'), type: 'text', placeholder: t('contact.placeholderNom') },
                { name: 'email', label: t('contact.email'), type: 'email', placeholder: t('contact.placeholderEmail') }
              ].map(field => (
                <div key={field.name}>
                  <label className="text-label" style={{ color: '#d6157d', display: 'block', marginBottom: '0.75rem' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    style={{
                      width: '100%',
                      background: inputBg,
                      color: textPrimary,
                      border: '1px solid ' + border,
                      borderRadius: '0.75rem',
                      padding: '1rem 1.25rem',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={e => e.target.style.borderColor = '#d6157d'}
                    onBlur={e => e.target.style.borderColor = border}
                  />
                </div>
              ))}

              <div>
                <label className="text-label" style={{ color: '#d6157d', display: 'block', marginBottom: '0.75rem' }}>
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.placeholderMessage')}
                  rows={6}
                  style={{
                    width: '100%',
                    background: inputBg,
                    color: textPrimary,
                    border: '1px solid ' + border,
                    borderRadius: '0.75rem',
                    padding: '1rem 1.25rem',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={e => e.target.style.borderColor = '#d6157d'}
                  onBlur={e => e.target.style.borderColor = border}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                style={{
                  width: '100%',
                  background: '#d6157d',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  padding: '1.1rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  opacity: status === 'sending' ? 0.7 : 1,
                  transition: 'all 0.2s',
                  boxShadow: '0 0 30px rgba(214,21,125,0.25)'
                }}
                onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.background = '#af1267' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#d6157d' }}
              >
                {status === 'idle' && t('contact.bouton')}
                {status === 'sending' && t('contact.sending')}
                {status === 'success' && t('contact.success')}
                {status === 'error' && t('contact.error')}
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
