import { CSSProperties } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { AdvancedContainer } from './AdvancedContainer';
import { withoutContainer } from '../../../hocs/withoutContainer';

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
  advancedContainer: withoutContainer(AdvancedContainer, { withoutPaddings: true }),
};

export default AdvancedContainer;
