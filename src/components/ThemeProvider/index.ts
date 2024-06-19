import { PropsWithChildren } from 'react';
import type { ComponentParameter } from '@uniformdev/canvas';

export type ThemeProviderProps = PropsWithChildren<{
  parameters?: { [key: string]: ComponentParameter };
}>;

export * from './ThemeProvider';
export { default } from './ThemeProvider';
