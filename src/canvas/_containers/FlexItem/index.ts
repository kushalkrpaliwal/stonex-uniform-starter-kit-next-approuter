import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { FlexItem } from './FlexItem';
import { FlexBoxValue, FlexItemValue } from '@/canvas/_containers/helpers/flexBox';

export type FlexItemProps = ComponentProps<{
  flexBox?: FlexBoxValue;
  flexItem?: FlexItemValue;
}>;

export const flexItemMappings = {
  flexItem: FlexItem,
};

export default FlexItem;
