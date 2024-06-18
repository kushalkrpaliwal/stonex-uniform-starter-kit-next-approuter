import { CSSProperties } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { AdvancedContainer } from './AdvancedContainer';
import { BoxModel } from '../helpers/boxModel';

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
