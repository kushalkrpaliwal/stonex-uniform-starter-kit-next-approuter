import { FC } from 'react';
import classNames from 'classnames';
import { ContainerProps, ContainerVariants } from './';
import { getFlexBoxStyles } from '@/canvas/_containers/helpers/flexBox';
import { getBoxModelStyles } from '@/canvas/_containers/helpers/boxModel';

const Container: FC<ContainerProps> = ({ containerVariant, children, flexBox, boxModel, className }) => (
  <div
    className={classNames(
      {
        container: containerVariant !== ContainerVariants.FluidContent,
        'container-fluid': containerVariant === ContainerVariants.FluidContent,
      },
      boxModel && getBoxModelStyles(boxModel),
      flexBox && getFlexBoxStyles(flexBox),
      className
    )}
  >
    {children}
  </div>
);

export default Container;
