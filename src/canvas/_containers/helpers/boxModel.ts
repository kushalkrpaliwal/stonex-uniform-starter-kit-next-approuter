import classNames from 'classnames';

type Sides = {
  top: string;
  right: string;
  bottom: string;
  left: string;
};

export type BoxModel = {
  padding: Sides;
  border: Sides;
  margin: Sides;
};

export const getHeightClass = (height?: string) => {
  switch (height) {
    case '1/3':
      return 'h-1/3';
    case '1/2':
      return 'h-1/2';
    case '2/3':
      return 'h-2/3';
    case '1/1':
      return 'h-1/1';
    default:
      return 'h-auto';
  }
};

export const getBoxModelStyles = (boxModel: BoxModel) => {
  return classNames(
    !!boxModel?.padding &&
      Object.entries(boxModel.padding)
        .filter(entry => !!entry[1] && entry[1] !== 'None')
        .map(([side, value]) => `p${side[0]}-${value}`),
    !!boxModel?.border &&
      Object.entries(boxModel.border)
        .filter(entry => !!entry[1])
        .map(([side, value]) => `border-${side[0]}-${value}`),
    !!boxModel?.margin &&
      Object.entries(boxModel.margin)
        .filter(entry => !!entry[1])
        .map(([side, value]) => `m${side[0]}-${value}`)
  );
};
