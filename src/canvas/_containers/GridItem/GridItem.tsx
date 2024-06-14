import { FC } from 'react';
import classNames from 'classnames';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import {
  getGridColumnsSpanClass,
  getGridColumnsStartClass,
  getGridRowsSpanClass,
  getGridRowsStartClass,
} from './helpers';
import { GridItemProps } from '.';

const GridItem: FC<GridItemProps> = ({
  columnStart,
  columnSpan,
  rowSpan,
  rowStart,
  component,
  context,
  slots,
  alignSelf,
  justifySelf,
  flexBox,
}) => (
  <div
    className={classNames(
      getGridColumnsStartClass(columnStart),
      getGridColumnsSpanClass(columnSpan),
      getGridRowsStartClass(rowStart),
      getGridRowsSpanClass(rowSpan),
      alignSelf,
      justifySelf,
      {
        flex: flexBox?.useFlexBox,
        [flexBox?.flexDirection as string]: flexBox?.useFlexBox,
        [flexBox?.alignItems as string]: flexBox?.useFlexBox,
        [flexBox?.justifyContent as string]: flexBox?.useFlexBox,
      }
    )}
  >
    <UniformSlot context={context} slot={slots.inner} data={component} />
  </div>
);

export const gridItemMappings = {
  gridItem: GridItem,
};

export default GridItem;
