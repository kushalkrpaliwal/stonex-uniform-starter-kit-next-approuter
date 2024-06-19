import { FC } from 'react';
import classNames from 'classnames';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { getDefaultTextStyle, getTextLetterSpacing, getTextSize } from './helpers';
import { TextProps } from './';

const DEFAULT_TAG = 'p';

export const Text: FC<TextProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  text,
  tag,
  size,
  letterSpacing,
  style = {},
  context,
  component,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  slotName,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  slots,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  slotIndex,
  textColor = '#000',
  ...restStyles
}) => {
  const Tag = tag || DEFAULT_TAG;

  const TextElement = () => (
    <UniformText
      placeholder="Text goes here"
      parameterId="text"
      style={{
        background: textColor,
        ...style,
        ...restStyles,
      }}
      as={Tag}
      className={classNames(
        '!bg-clip-text',
        'text-transparent',
        getDefaultTextStyle(Tag),
        getTextSize(size),
        getTextLetterSpacing(letterSpacing)
      )}
      component={component}
      context={context}
    />
  );

  // ToDo requires refactoring (styles do not apply when сontextual editing)
  // As per recent changes it's not supporting a gradient color as well.
  return context.isContextualEditing ? (
    <div style={{ color: textColor, ...style, ...restStyles }}>
      <TextElement />
    </div>
  ) : (
    <TextElement />
  );
};
