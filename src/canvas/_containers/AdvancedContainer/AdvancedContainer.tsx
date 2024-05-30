import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { AdvancedContainerProps, AdvancedContainerVariants } from '.';
import classNames from 'classnames';
import clsx from 'clsx';

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
      className={clsx(
        // Class names applied on the fly on component level
        Boolean(boxModel) && Object.entries(boxModel.padding).map(([side, value]) => `p${side[0]}-${value}`),
        Boolean(boxModel) && Object.entries(boxModel.border).map(([side, value]) => `border-${side[0]}-${value}`),
        Boolean(boxModel) && Object.entries(boxModel.margin).map(([side, value]) => `m${side[0]}-${value}`),
        // Class names applied directly from component props
        borderRadius,
        boxShadow,
        { 'overflow-hidden': !!borderRadius }
      )}
      style={{
        // Styles applied inline based on real token value (like css variable)
        background: backgroundColor,
        borderColor,
      }}
    >
      <div
        title={title}
        className={classNames('relative w-full h-full', {
          'max-w-screen-xl mx-auto': component.variant !== AdvancedContainerVariants.FluidContent,
        })}
        style={{ ...style }}
      >
        <div className="absolute w-full h-full top-0 left-0 z-10 overflow-hidden">
          <UniformSlot context={context} slot={slots['background']} data={component} />
        </div>
        <div className="relative z-20">
          <UniformSlot context={context} slot={slots['content']} data={component} />
        </div>
      </div>
    </div>
  );
};
