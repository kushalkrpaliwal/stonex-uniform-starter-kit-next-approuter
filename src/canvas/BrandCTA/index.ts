import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { BrandCTAComponent } from './BrandCTAComponent';

export const sizes = ['sm', 'lg'] as const;
export const brands = ['forex', 'cityindex', 'stonex'] as const;
export const types = ['primary', 'secondary', 'tertiary'] as const;
export const styles = ['brand', 'info', 'success', 'warning', 'error'] as const;

export type BrandCTAProps = {
  size?: (typeof sizes)[number];
  brand?: (typeof brands)[number];
  type?: (typeof types)[number];
  style?: (typeof styles)[number];
  className?: string;
};

export type BrandCTAComponentProps = ComponentProps<{
  ctaParameters: BrandCTAProps;
  iconName?: string;
  rightIconPlacement?: boolean;
}>;

export const brandCTAMappings = {
  brandCta: BrandCTAComponent,
};

export default BrandCTAComponent;
