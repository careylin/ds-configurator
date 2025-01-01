import { useState } from 'react'
import './App.css'
import './components/settings.css'
import SettingsPanel from './components/SettingsPanel'
import Preview from './components/Preview'
import { DesignTokens } from './types'

export default function App() {
  const [tokens, setTokens] = useState<DesignTokens>({
    baseTextSize: 16,
    fontScaleRatio: 1.2,
    baseLineHeight: 1.3,
    lineHeightRatio: 1.05,
    spaceScaleRatio: 1.4,
    borderRadius: 8,
    buttonSize: 40,
    fontLevelsCount: 5
  })

  // Initialize button font size
  document.documentElement.style.setProperty('--button-font-size', `${tokens.baseTextSize}px`)

  const updateToken = <K extends keyof DesignTokens>(key: K, value: number): void => {
    setTokens((prev: DesignTokens) => ({
      ...prev,
      [key]: value
    }))

    // Update CSS custom properties
    const unit = key === 'fontScaleRatio' || key === 'spaceScaleRatio' ? '' : 'px'
    document.documentElement.style.setProperty(`--${key}`, `${value}${unit}`)
    
    // Update button font size when baseTextSize changes
    if (key === 'baseTextSize') {
      // Set all button font sizes based on the scale
      const smallSize = value / tokens.fontScaleRatio
      const largeSize = value * tokens.fontScaleRatio
      
      document.documentElement.style.setProperty('--button-font-size-sm', `${smallSize}px`)
      document.documentElement.style.setProperty('--button-font-size', `${value}px`)
      document.documentElement.style.setProperty('--button-font-size-lg', `${largeSize}px`)
    }
  }

  // Initialize all button font sizes
  document.documentElement.style.setProperty('--button-font-size-sm', `${tokens.baseTextSize / tokens.fontScaleRatio}px`)
  document.documentElement.style.setProperty('--button-font-size', `${tokens.baseTextSize}px`)
  document.documentElement.style.setProperty('--button-font-size-lg', `${tokens.baseTextSize * tokens.fontScaleRatio}px`)

  return (
    <div className="app">
      <header>
        <h1>Design System Configuration</h1>
      </header>
      
      <main>
        <SettingsPanel tokens={tokens} onUpdateToken={updateToken} />
        <Preview tokens={tokens} />
      </main>
    </div>
  )
}
