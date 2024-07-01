import { FC } from 'react'
import classNames from 'classnames'
import { ThemeProviderProps } from '.'
import { appFonts } from '@/fonts'
import { NextFont } from 'next/dist/compiled/@next/font'

const fonts: {
  [key: string]: NextFont;
} = {
  stonex: appFonts.forma,
  cityindex: appFonts.aeonik,
  forex: appFonts.poppins,
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, parameters }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const brandName = parameters?.brand?.value?.themeName?.toLowerCase() || 'wireframe'
  const themeName = parameters?.theme?.value || 'light'

  return (
    <div
      className={classNames('min-h-screen overflow-x-hidden flex flex-col', fonts[brandName].className)}
      data-theme={themeName}
      data-brand={brandName}
    >
      {children}
    </div>
  )
}

export default ThemeProvider
