import { WithTooltip, TooltipLinkList } from '@storybook/components';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { useGlobals } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { MoonIcon, SunIcon, GlobeIcon } from '@storybook/icons';

import { TOOL_ID } from './constants';
type Data = {
  options: { name: string }[];
  onClick: (value: string) => void;
  onActive: () => void;
};
type DataType = {
  theme: Data;
  brand: Data;
};
export const Tool = memo(function MyAddonSelector() {
  const [globals, updateGlobals] = useGlobals();
  const { themeSwitcher, brandSwitcher } = globals;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeSwitcher.toLowerCase());
    window.localStorage.setItem('data-theme', themeSwitcher.toLowerCase());
  }, [themeSwitcher]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', brandSwitcher.toLowerCase());
    window.localStorage.setItem('data-theme', brandSwitcher.toLowerCase());
  }, [brandSwitcher]);

  const data: DataType = useMemo(
    () => ({
      theme: {
        options: [{ name: 'Light' }, { name: 'Dark' }],
        onClick: (value: string) => updateGlobals({ themeSwitcher: value }),
        onActive: () =>
          setActiveState(prev => ({
            ...prev,
            theme: true,
          })),
        isActive: false,
      },
      brand: {
        options: [{ name: 'Stonex' }, { name: 'Forex' }, { name: 'CityIndex' }],
        onClick: (value: string) => updateGlobals({ brandSwitcher: value }),
        onActive: () =>
          setActiveState(prev => ({
            ...prev,
            brand: true,
          })),
        isActive: false,
      },
    }),
    []
  );

  const [activeStates, setActiveState] = useState<{ theme: boolean; brand: boolean }>({ theme: false, brand: false });

  return (
    <>
      {Object.entries(data).map(([key, { options, onClick, onActive }]) => (
        <WithTooltip
          placement="bottom"
          trigger="click"
          key={key}
          visible={activeStates[key as keyof typeof activeStates]}
          tooltip={
            <TooltipLinkList
              links={options.map(({ name }: { name: string }) => ({
                id: name,
                title: name,
                onClick: () => onClick(name),
              }))}
            />
          }
        >
          <IconButton
            key={`${TOOL_ID}-${key}`}
            title={`Select ${key}`}
            onClick={onActive}
            active={activeStates[key as keyof typeof activeStates]}
          >
            {key === 'brand' ? <GlobeIcon /> : themeSwitcher === 'Light' ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </WithTooltip>
      ))}
    </>
  );
});
