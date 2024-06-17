import { CSSProperties } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { AdvancedContainer } from './AdvancedContainer';

type Sides = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type BoxModel = {
  padding: Sides;
  border: Sides;
  margin: Sides;
};

export enum AdvancedContainerVariants {
  FluidContent = 'fluidContent',
}

export type AdvancedContainerProps = ComponentProps<
  {
    title?: string;
    style: CSSProperties;
    boxModel: BoxModel;
    borderRadius?: string;
    boxShadow?: string;
    borderColor?: string;
    backgroundColor?: string;
  },
  'content' | 'background'
>;

export const advancedContainerMappings = {
  advancedContainer: AdvancedContainer,
};

export default AdvancedContainer;
