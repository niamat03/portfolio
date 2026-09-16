import { useMemo } from 'react'
import { useTheme } from '../context/ThemeContext'

const FIELD = 2000

function generateStars(count: number) {
  const shadows: string[] = []
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * FIELD)
    const y = Math.floor(Math.random() * FIELD)
    shadows.push(`${x}px ${y}px #fff`)
  }
  return shadows.join(', ')
}

function StarField() {
  const { isDark } = useTheme()

  const small = useMemo(() => generateStars(500), [])
  const medium = useMemo(() => generateStars(150), [])
  const large = useMemo(() => generateStars(60), [])

  if (!isDark) return null

  return (
    <div className="starfield" aria-hidden="true">
      <div className="star-nebula" />
      <div className="star-layer star-small" style={{ boxShadow: small }} />
      <div className="star-layer star-small star-layer-2" style={{ boxShadow: small }} />
      <div className="star-layer star-medium" style={{ boxShadow: medium }} />
      <div className="star-layer star-medium star-layer-2" style={{ boxShadow: medium }} />
      <div className="star-layer star-large" style={{ boxShadow: large }} />
      <div className="star-layer star-large star-layer-2" style={{ boxShadow: large }} />
    </div>
  )
}

export default StarField
