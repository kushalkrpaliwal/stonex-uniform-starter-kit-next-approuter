import { FC } from 'react';
import classNames from 'classnames';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { getGridColumnsClass } from './helpers';
import { GridProps } from '.';

export const Grid: FC<GridProps> = ({ columnsCount, horizontalGap, verticalGap, component, context, slots }) => {
  const gapX = horizontalGap ? horizontalGap.replace('-', '-x-') : '';
  const gapY = verticalGap ? verticalGap.replace('-', '-y-') : '';
  return (
    <div className={classNames('w-full grid', gapX, gapY, getGridColumnsClass(columnsCount))}>
      <UniformSlot context={context} slot={slots['grid-inner']} data={component} />
    </div>
  );
};
