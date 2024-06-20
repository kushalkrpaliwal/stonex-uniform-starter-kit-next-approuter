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

export const getBoxModelStyles = (boxModel: BoxModel) => {
  return classNames(
    !!boxModel?.padding &&
      Object.entries(boxModel.padding)
        .filter(entry => !!entry[1])
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
