import { FC } from 'react';
import classNames from 'classnames';
import { ThemeProviderProps } from '.';

import localFont from 'next/font/local';

const stonexFont = localFont({
  src: [
    {
      path: '../../fonts/StonexForma/StoneXForma-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/StonexForma/StoneXForma-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../fonts/StonexForma/StoneXForma-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/StonexForma/StoneXForma-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});

const ThemeProvider: FC<ThemeProviderProps> = ({ children, parameters }) => {
  const brandName = parameters?.brand?.value?.themeName?.toLowerCase() || 'wireframe';
  const themeName = parameters?.theme?.value || 'light';

  return (
    <div
      className={classNames('min-h-screen overflow-x-hidden flex flex-col', stonexFont?.className)}
      data-theme={themeName}
      data-brand={brandName}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
