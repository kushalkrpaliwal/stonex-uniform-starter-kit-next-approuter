import classNames from 'classnames';

export interface FlexBoxValue {
  useFlexBox: boolean;
  alignItems: string;
  justifyContent: string;
  flexDirection: string;
  gap: string;
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
