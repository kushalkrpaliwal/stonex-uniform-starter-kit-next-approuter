import { useEffect, useGlobals } from '@storybook/preview-api';
import type { Renderer, PartialStoryFn as StoryFunction } from '@storybook/types';

export const useWithGlobals = (StoryFn: StoryFunction<Renderer>) => {
  const [globals, updateGlobals] = useGlobals();
  const { themeSwitcher, brandSwitcher } = globals;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeSwitcher.toLowerCase());
  }, [themeSwitcher, updateGlobals]);

  useEffect(() => {
    document.documentElement.setAttribute('data-brand', brandSwitcher.toLowerCase());
  }, [brandSwitcher, updateGlobals]);

  return StoryFn();
};
