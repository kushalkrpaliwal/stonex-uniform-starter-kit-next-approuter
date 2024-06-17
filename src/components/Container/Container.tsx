import { FC } from 'react';
import classNames from 'classnames';
import { ContainerProps, ContainerVariants } from './';
import { getFlexBoxStyles } from '@/canvas/_containers/helpers/flexBox';

const Container: FC<ContainerProps> = ({ containerVariant, children, flexBox, className }) => (
  <div
    className={classNames(
      { 'w-full': containerVariant === ContainerVariants.FluidContent },
      flexBox && getFlexBoxStyles(flexBox),
      className
    )}
  >
    {children}
  </div>
);

export default Container;
