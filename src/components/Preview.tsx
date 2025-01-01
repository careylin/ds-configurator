import { memo } from 'react'
import { DesignTokens } from '../types'

interface PreviewProps {
  tokens: DesignTokens
}

const text = {
  long: `Son we live in a world that has walls, and those have to be guarded by men with guns. Whose gonna do it you, you lieutenant Weinberg? I have a greater responsibility than you can possibly fathom.`,
  short: `Aa Bb Cc 123`
};

const Preview = memo(({ tokens }: PreviewProps) => {
  // Calculate font sizes using the scale ratio, including one size below base
  const getFontSizes = (baseSize: number, ratio: number, steps: number) => {
    // Calculate the smaller size first
    const smallerSize = baseSize / ratio
    
    // Generate the rest of the sizes starting from base
    const largerSizes = Array.from({ length: steps - 1 }, (_, i) => ({
      size: baseSize * Math.pow(ratio, i),
      label: `${100 + (i * 100)}`
    }))
    
    // Combine smaller size with larger sizes
    return [
      { size: smallerSize, label: '50' },
      ...largerSizes
    ].reverse()
  }

  const fontSizes = getFontSizes(tokens.baseTextSize, tokens.fontScaleRatio, tokens.fontLevelsCount)
  
  // Calculate the index offset from size 50
  const getLineHeightOffset = (label: string): number => {
    const sizeNumber = parseInt(label)
    // Convert size label to offset from 50: 
    // 50 -> 0
    // 100 -> 1
    // 200 -> 2
    // 300 -> 3, etc.
    return sizeNumber === 50 ? 0 : Math.log2(sizeNumber / 50)
  }

  return (
    <div className="preview">
      <h2>Preview</h2>
      
      <div className="preview-buttons">
        <button className="preview-button preview-button-sm">
          Small Button
        </button>
        <button className="preview-button preview-button-md">
          Medium Button
        </button>
        <button className="preview-button preview-button-lg">
          Large Button
        </button>
      </div>
      
      <div className="preview-text-scales">
        {fontSizes.map((size, index) => {
          const lineHeight = tokens.baseLineHeight * Math.pow(tokens.lineHeightRatio, -getLineHeightOffset(size.label))
          const lineHeightPx = Math.round(size.size * lineHeight)

          return (
            <div key={index} className="preview-text-row">
              <div className="preview-text-specs">
                {Math.round(size.size)}px / {lineHeightPx}px | {size.label}
              </div>
              <p 
                className="preview-text"
                style={{ 
                  fontSize: `${size.size}px`,
                  lineHeight: `${lineHeight}`,
                  marginBottom: '1.5rem'
                }}
              >
                {text.long}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
})

Preview.displayName = 'Preview'

export default Preview