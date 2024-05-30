import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { BrandCTAComponent, SpacingOptionType } from './BrandCTAComponent';

export type BrandCTAProps = {
  brand?: 'forex' | 'ci' | 'stonex';
  size?: 'sm' | 'lg';
  type?: 'primary' | 'secondary' | 'tertiary';
  style?: 'brand' | 'info' | 'success' | 'warning' | 'error';
  icon?: string;
  className?: string;
};

export type BrandCTAComponentProps = ComponentProps<{
  ctaParameters: BrandCTAProps;
  topSpacing: SpacingOptionType;
  bottomSpacing: SpacingOptionType;
}>;

export const brandCTAMappings = {
  brandCta: BrandCTAComponent,
};

export default BrandCTAComponent;
