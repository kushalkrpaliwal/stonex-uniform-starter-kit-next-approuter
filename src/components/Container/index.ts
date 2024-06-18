import { ReactNode } from 'react';
import { BackgroundTypes, PaddingSize } from '@/utilities/styling';
import { FlexBoxValue } from '@/canvas/_containers/helpers/flexBox';
import { BoxModel } from '@/canvas/_containers/helpers/boxModel';

export enum ContainerVariants {
  FluidContent = 'fluidContent',
}

export type ContainerProps = {
  backgroundType?: BackgroundTypes | Types.ThemeColorsValues | string;
  paddingTop?: PaddingSize;
  paddingBottom?: PaddingSize;
  marginTop?: PaddingSize;
  marginBottom?: PaddingSize;
  children: ReactNode;
  backgroundClassName?: string;
  containerVariant?: string;
  className?: string;
  flexBox?: FlexBoxValue;
  boxModel?: BoxModel;
};

export * from './BaseContainer';
export * from './ScreenContainer';
export { default } from './Container';
