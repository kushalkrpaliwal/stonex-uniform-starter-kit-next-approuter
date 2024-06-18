import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { AdvancedContainerProps, AdvancedContainerVariants } from '.';
import classNames from 'classnames';
import { getBoxModelStyles } from '@/canvas/_containers/helpers/boxModel';

export const AdvancedContainer: FC<AdvancedContainerProps> = ({
  title,
  style = {},
  component,
  context,
  slots,
  boxModel,
  borderRadius,
  boxShadow,
  borderColor,
  backgroundColor,
}) => {
  return (
    <div
      title={title}
      className={classNames(getBoxModelStyles(boxModel), borderRadius, boxShadow, {
        'overflow-hidden': !!borderRadius,
        'max-w-screen-xl mx-auto': component.variant !== AdvancedContainerVariants.FluidContent,
      })}
      style={{
        // Styles applied inline based on real token value (like css variable)
        background: backgroundColor,
        borderColor,
        ...style,
      }}
    >
      {slots['background'] && (
        <div className="absolute w-full h-full top-0 left-0 z-10 overflow-hidden">
          <UniformSlot context={context} slot={slots['background']} data={component} />
        </div>
      )}
      {slots['content'] && (
        <div className="relative z-20">
          <UniformSlot context={context} slot={slots['content']} data={component} />
        </div>
      )}
    </div>
  );
};
