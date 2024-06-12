import '@/styles/globals.scss'
import type { Preview } from '@storybook/react'
import { useWithGlobals } from '../storybook-addons/storybook-brand-theme-switcher/src/useWithGlobals'

const preview: Preview = {
  globalTypes: {
    themeSwitcher: {
      defaultValue: 'light',
    },
    brandSwitcher: {
      defaultValue: 'stonex',
    }
  },
  decorators: [useWithGlobals as any],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
