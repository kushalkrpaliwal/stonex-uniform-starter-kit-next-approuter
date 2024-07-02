import { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  preload: true,
});

const forma = localFont({
  display: 'swap',
  preload: true,
  src: [
    {
      path: './StonexForma/StoneXForma-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './StonexForma/StoneXForma-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './StonexForma/StoneXForma-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './StonexForma/StoneXForma-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});

const aeonik = localFont({
  display: 'swap',
  preload: true,
  src: [
    {
      path: './Aeonik/Aeonik-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Aeonik/Aeonik-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Aeonik/Aeonik-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Aeonik/Aeonik-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './Aeonik/Aeonik-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Aeonik/Aeonik-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './Aeonik/Aeonik-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Aeonik/Aeonik-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
  ],
});

export const appFonts: Record<Types.SupportedFonts, NextFont> = {
  poppins,
  forma,
  aeonik,
};
