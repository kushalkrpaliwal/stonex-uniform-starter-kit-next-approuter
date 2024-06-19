import { draftMode } from 'next/headers';
import { ComponentProps, UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import classNames from 'classnames';
import { CHILDREN_CONTAINER_STYLES, COMMON_PADDING } from '@/hocs/withoutContainer';
import ThemeProvider from '../../components/ThemeProvider';
import UniformPreviewIcon from '../../components/UniformPreviewIcon';

type SlotNames = 'pageHeader' | 'pageContent' | 'pageFooter';
type Parameters = unknown;
type Props = ComponentProps<Parameters, SlotNames>;

export const BasePage = ({ slots, component, context }: Props) => {
  const { isEnabled: isEnabledDraftMode } = draftMode();
  const isContextualEditing = context.isContextualEditing;
  return (
    <ThemeProvider parameters={context.composition.parameters}>
      <div className={COMMON_PADDING}>
        <UniformSlot context={context} slot={slots.pageHeader} data={component} />
      </div>

      <div className={classNames('flex flex-col flex-1', CHILDREN_CONTAINER_STYLES, COMMON_PADDING)}>
        <UniformSlot context={context} slot={slots.pageContent} data={component} />
      </div>

      <div className={COMMON_PADDING}>
        <UniformSlot context={context} slot={slots.pageFooter} data={component} />
      </div>

      {isEnabledDraftMode && <UniformPreviewIcon isContextualEditing={isContextualEditing} />}
    </ThemeProvider>
  );
};

export const pageMapping = {
  page: BasePage,
};
