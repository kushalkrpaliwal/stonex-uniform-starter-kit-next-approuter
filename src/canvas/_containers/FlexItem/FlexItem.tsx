import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { FlexItemProps } from '.';
import { getFlexBoxStyles, getFlexItemStyles } from '@/canvas/_containers/helpers/flexBox';
import classNames from 'classnames';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FlexItem: FC<FlexItemProps> = ({ flexBox, flexItem, context, slots, component, ...restStyles }) => (
  <div className={classNames(flexBox && getFlexBoxStyles(flexBox), getFlexItemStyles(flexItem))}>
    <UniformSlot context={context} slot={slots.content} data={component} />
  </div>
);
