import { memo } from 'react'
import * as Slider from '@radix-ui/react-slider'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { DesignTokens } from '../types'

interface SettingsPanelProps {
  tokens: DesignTokens
  onUpdateToken: <K extends keyof DesignTokens>(key: K, value: number) => void
}

const SettingsPanel = memo(({ tokens, onUpdateToken }: SettingsPanelProps) => {
  const handleSliderChange = (key: keyof DesignTokens) => (values: number[]): void => {
    onUpdateToken(key, values[0])
  }

  return (
    <div className="settings-panel">
      <Accordion.Root type="multiple" className="AccordionRoot">
        <Accordion.Item value="baseTextSize" className="AccordionItem">
          <Accordion.Trigger className="AccordionTrigger">
            Typography
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
          <Accordion.Content className="AccordionContent">
            <div className="setting-group">
              <label>Base Text Size</label>
              <Slider.Root
                className="slider-root"
                value={[tokens.baseTextSize]}
                max={24}
                min={12}
                step={1}
                onValueChange={handleSliderChange('baseTextSize')}
              >
                <Slider.Track className="slider-track">
                  <Slider.Range className="slider-range" />
                </Slider.Track>
                <Slider.Thumb className="slider-thumb" />
              </Slider.Root>
              <span className="value">{tokens.baseTextSize}px</span>
            </div>

            <div className="setting-group">
              <label>Font Scale Ratio</label>
              <Slider.Root
                className="slider-root"
                value={[tokens.fontScaleRatio]}
                max={1.7}
                min={1}
                step={0.01}
                onValueChange={handleSliderChange('fontScaleRatio')}
              >
                <Slider.Track className="slider-track">
                  <Slider.Range className="slider-range" />
                </Slider.Track>
                <Slider.Thumb className="slider-thumb" />
              </Slider.Root>
              <span className="value">{tokens.fontScaleRatio.toFixed(2)}x</span>
            </div>

            <div className="setting-group">
              <label>Font Levels</label>
              <Slider.Root
                className="slider-root"
                value={[tokens.fontLevelsCount]}
                max={10}
                min={4}
                step={1}
                onValueChange={handleSliderChange('fontLevelsCount')}
              >
                <Slider.Track className="slider-track">
                  <Slider.Range className="slider-range" />
                </Slider.Track>
                <Slider.Thumb className="slider-thumb" />
              </Slider.Root>
              <span className="value">{tokens.fontLevelsCount}</span>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="lineHeight" className="AccordionItem">
          <Accordion.Trigger className="AccordionTrigger">
            Line Height
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
          <Accordion.Content className="AccordionContent">
            <div className="setting-group">
              <label>Base Line Height</label>
              <Slider.Root
                className="slider-root"
                value={[tokens.baseLineHeight]}
                max={2}
                min={0.7}
                step={0.01}
                onValueChange={handleSliderChange('baseLineHeight')}
              >
                <Slider.Track className="slider-track">
                  <Slider.Range className="slider-range" />
                </Slider.Track>
                <Slider.Thumb className="slider-thumb" />
              </Slider.Root>
              <span className="value">{tokens.baseLineHeight.toFixed(2)}x</span>
            </div>

            <div className="setting-group">
              <label>Line Height Ratio</label>
              <Slider.Root
                className="slider-root"
                value={[tokens.lineHeightRatio]}
                max={1.5}
                min={0.9}
                step={0.01}
                onValueChange={handleSliderChange('lineHeightRatio')}
              >
                <Slider.Track className="slider-track">
                  <Slider.Range className="slider-range" />
                </Slider.Track>
                <Slider.Thumb className="slider-thumb" />
              </Slider.Root>
              <span className="value">{tokens.lineHeightRatio.toFixed(2)}x</span>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="spacing" className="AccordionItem">
          <Accordion.Trigger className="AccordionTrigger">
            Spacing
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
          <Accordion.Content className="AccordionContent">
            <div className="setting-group">
              <label>Space Scale Ratio</label>
              <Slider.Root
                className="slider-root"
                value={[tokens.spaceScaleRatio]}
                max={2}
                min={1.1}
                step={0.01}
                onValueChange={handleSliderChange('spaceScaleRatio')}
              >
                <Slider.Track className="slider-track">
                  <Slider.Range className="slider-range" />
                </Slider.Track>
                <Slider.Thumb className="slider-thumb" />
              </Slider.Root>
              <span className="value">{tokens.spaceScaleRatio.toFixed(2)}x</span>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="components" className="AccordionItem">
          <Accordion.Trigger className="AccordionTrigger">
            Components
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
          <Accordion.Content className="AccordionContent">
            <div className="setting-group">
              <label>Border Radius</label>
              <Slider.Root
                className="slider-root"
                value={[tokens.borderRadius]}
                max={20}
                min={0}
                step={1}
                onValueChange={handleSliderChange('borderRadius')}
              >
                <Slider.Track className="slider-track">
                  <Slider.Range className="slider-range" />
                </Slider.Track>
                <Slider.Thumb className="slider-thumb" />
              </Slider.Root>
              <span className="value">{tokens.borderRadius}px</span>
            </div>

            <div className="setting-group">
              <label>Button Size</label>
              <Slider.Root
                className="slider-root"
                value={[tokens.buttonSize]}
                max={64}
                min={24}
                step={1}
                onValueChange={handleSliderChange('buttonSize')}
              >
                <Slider.Track className="slider-track">
                  <Slider.Range className="slider-range" />
                </Slider.Track>
                <Slider.Thumb className="slider-thumb" />
              </Slider.Root>
              <span className="value">{tokens.buttonSize}px</span>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
})

SettingsPanel.displayName = 'SettingsPanel'

export default SettingsPanel 