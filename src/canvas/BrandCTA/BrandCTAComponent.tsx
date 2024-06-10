'use client';
import { FC } from 'react';
import classNames from 'classnames';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { BrandCTAComponentProps } from '.';
import Link from 'next/link';
import clsx from 'clsx';
// import IconArrow from '@/components/IconArrow';

export type SpacingOptionType = {
  label: string;
  value: string;
};

export const BrandCTAComponent: FC<BrandCTAComponentProps> = props => {
  const { context, component, ctaParameters, topSpacing, bottomSpacing } = props;
  const { className, type, size } = ctaParameters || {
    className: '',
    type: 'primary',
    size: 'lg',
  };

  const sizeClasses = clsx({
    'p-Button-sm': size === 'sm' && type !== 'tertiary',
    'p-Button-lg': size === 'lg' && type !== 'tertiary',
    'font-type-CTA-primary-sm': size === 'sm',
    'font-type-CTA-primary-lg': size === 'lg' || !size,
    [`mt-${topSpacing?.label}`]: !!topSpacing,
    [`mb-${bottomSpacing?.label}`]: !!bottomSpacing,
  });

  console.log(component);

  return (
    <Link href={'/'} className={classNames(sizeClasses, className)}>
      {/*<IconArrow width={15} />*/}
      <UniformText parameterId="label" component={component} context={context} />
    </Link>
  );
};
