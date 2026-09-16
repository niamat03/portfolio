import { useTheme } from '../context/ThemeContext'

function LightGeoField() {
  const { isDark } = useTheme()

  if (isDark) return null

  return (
    <div className="geo-field" aria-hidden="true">
      <div className="geo-field-glow" />
      <div className="geo-field-grid" />
      <div className="geo-field-dots" />
    </div>
  )
}

export default LightGeoField
