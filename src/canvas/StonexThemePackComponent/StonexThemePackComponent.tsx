'use client';
import { ChangeEventHandler, FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { StonexThemePackProps } from '.';

import statickThemes from '../../../public/staticThemes.json';
import StaticThemesSelector, { Theme } from '@/components/ThemeSelector/ThemeSelector';

const themeSelection = ['dark', 'light'];

export const StonexThemePackComponent: FC<StonexThemePackProps> = ({ headingTag = 'h2' }) => {
  const [brand, setBrand] = useState(statickThemes[0]);
  const [theme, setTheme] = useState('light');

  const handleThemeChange: ChangeEventHandler<HTMLInputElement> = event => {
    setTheme(event.target.value);
  };

  const HeadingTag = headingTag;
  useEffect(() => {
    document.querySelector('body')?.setAttribute('data-brand', brand.themeName?.toLowerCase());
    document.querySelector('body')?.setAttribute('data-theme', theme);
  }, [brand, theme]);

  return (
    <>
      <div
        className={classNames(
          'flex border-Button flex-col items-center rounded-4 border-1 gap-4 bg-color-blue-0 border-color-blue-100 m-12 !p-12 text-primary-content w-[fit-content] justify-center'
        )}
      >
        <HeadingTag className={'font-bold'}>Select brand: </HeadingTag>

        <div className={'flex gap-24 items-bottom'}>
          <StaticThemesSelector
            selectedTheme={brand}
            setTheme={setBrand}
            themes={statickThemes.reduce((acc: { [key: string]: Theme }, curr) => {
              acc[curr.themeLabel] = curr;
              return acc;
            }, {})}
          />
        </div>
        <HeadingTag className={'font-bold'}>Select theme: </HeadingTag>

        <div className={'flex gap-12 items-bottom font-bold'}>
          {themeSelection.map(themeName => (
            <label
              key={themeName}
              className={classNames('inline-flex items-center border-blue-300 rounded-4 border-1 border-solid p-4', {
                'bg-blue-200': theme === themeName,
              })}
            >
              <input
                type="radio"
                name="theme"
                value={themeName}
                id={themeName}
                checked={theme === themeName}
                onChange={handleThemeChange}
                className="hidden"
              />
              <span>{themeName}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};
