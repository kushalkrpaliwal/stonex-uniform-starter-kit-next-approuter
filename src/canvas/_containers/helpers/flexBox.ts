import classNames from 'classnames';

export interface FlexBoxValue {
  useFlexBox: boolean;
  alignItems: string;
  justifyContent: string;
  flexDirection: string;
  gap: string;
}

export interface FlexItemValue {
  basis: string;
  grow: boolean;
  shrink: boolean;
  justifySelf: string;
  alignSelf: string;
}

export const getFlexBoxStyles = (flexBox?: FlexBoxValue) => {
  if (!flexBox) return '';

  return classNames({
    block: !flexBox?.useFlexBox,
    flex: flexBox?.useFlexBox,
    [flexBox?.flexDirection]: flexBox?.useFlexBox,
    [flexBox?.alignItems]: flexBox?.useFlexBox,
    [flexBox?.justifyContent]: flexBox?.useFlexBox,
    [flexBox?.gap]: flexBox?.useFlexBox,
  });
};

export const getFlexItemStyles = (flex?: FlexItemValue) => {
  if (!flex) return '';

  return classNames('flex', flex.basis, flex.justifySelf, flex.alignSelf, {
    grow: flex.grow,
    shrink: flex.shrink,
  });
};
