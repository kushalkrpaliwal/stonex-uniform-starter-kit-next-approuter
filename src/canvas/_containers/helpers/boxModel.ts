import classNames from 'classnames';

type Sides = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type BoxModel = {
  padding: Sides;
  border: Sides;
  margin: Sides;
};

export const getBoxModelStyles = (boxModel: BoxModel) => {
  return classNames(
    Boolean(boxModel) && Object.entries(boxModel.padding).map(([side, value]) => `p${side[0]}-${value}`),
    Boolean(boxModel) && Object.entries(boxModel.border).map(([side, value]) => `border-${side[0]}-${value}`),
    Boolean(boxModel) && Object.entries(boxModel.margin).map(([side, value]) => `m${side[0]}-${value}`)
  );
};
