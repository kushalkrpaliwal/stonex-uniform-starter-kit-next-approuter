'use client';

import { useEffect, useRef } from 'react';
import debounce from 'lodash-es/debounce';

import deviceDesktop from '@/designs/device/desktop.json';
import deviceTablet from '@/designs/device/tablet.json';
import deviceMobile from '@/designs/device/mobile.json';

type Breakpoint = {
  name: string;
  value: string;
};

const breakpoints: Breakpoint[] = [
  { name: 'mobile', value: deviceMobile.screen.width.value },
  { name: 'tablet', value: deviceTablet.screen.width.value },
  { name: 'desktop', value: deviceDesktop.screen.width.value },
];

export const DynamicCSS = ({ brand, theme }: { brand: string; theme: string }) => {
  const loadedCssRef = useRef<HTMLLinkElement | null>(null);
  const currentHrefRef = useRef<string | null>(null);

  const loadCSS = (href: string) => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);

      return link;
    }
  };

  useEffect(() => {
    if (!brand || !theme) {
      console.error('brand or theme not provided');
      return;
    }

    loadCSS(`/tokens/css/brand/${brand}/base.css`);
    loadCSS(`/tokens/css/brand/${brand}/${theme}.css`);

    const handleCssLoad = () => {
      const width = window.innerWidth;

      const { name } =
        width < parseInt(breakpoints[1].value)
          ? breakpoints[0]
          : width < parseInt(breakpoints[2].value)
            ? breakpoints[1]
            : breakpoints[2];

      const href = `/tokens/css/brand/${brand}/device/${name}.css`;

      if (currentHrefRef.current === href) return;

      const link = loadCSS(href);

      if (!link) return;

      link.onload = () => {
        if (loadedCssRef.current) {
          document.head.removeChild(loadedCssRef.current);
        }
        loadedCssRef.current = link;
        currentHrefRef.current = href;
      };

      document.head.appendChild(link);
    };

    const initialLoad = async () => {
      // await import(`/tokens/css/brand/${brand}/base.css`);
      // await import(`/tokens/css/brand/${brand}/${theme}.css`);
      handleCssLoad();
    };

    initialLoad();

    const debouncedLoad = debounce(handleCssLoad, 100);

    window.addEventListener('resize', debouncedLoad);
    return () => window.removeEventListener('resize', debouncedLoad);
  }, [brand, theme]);

  return null;
};
