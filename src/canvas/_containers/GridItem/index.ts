import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import GridItem from './GridItem';

// TODO: Make unified with Next App
interface FlexBoxValue {
  useFlexBox: boolean;
  alignItems: string;
  justifyContent: string;
  flexDirection: string;
}

export type GridItemProps = ComponentProps<
  {
    columnSpan?: Types.AvailableColumnCount;
    columnStart?: Types.AvailableColumnCount;
    rowSpan?: Types.AvailableRowCount;
    rowStart?: Types.AvailableRowCount;
    alignSelf?: Types.AlignSelf;
    justifySelf?: Types.JustifySelf;
    flexBox?: FlexBoxValue;
  },
  'inner'
>;

export const gridItemMappings = {
  gridItem: GridItem,
};

export default GridItem;
