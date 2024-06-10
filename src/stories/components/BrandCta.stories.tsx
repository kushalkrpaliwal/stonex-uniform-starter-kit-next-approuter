import type { Meta, StoryObj } from '@storybook/react';
import { UniformComposition } from '@uniformdev/canvas-react';
import { createFakeCompositionData } from '../utils';
import BrandCTAComponent, { BrandCTAComponentProps, brands, sizes, styles, types } from '@/canvas/BrandCTA';

const meta: Meta<typeof BrandCTAComponent> = {
  title: 'BrandCTAComponent',
  component: BrandCTAComponent,
  argTypes: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    label: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: types,
    },
    theme: {
      control: 'select',
      options: ['dark', 'light'],
    },
    brand: {
      control: 'select',
      options: brands,
    },
    size: {
      control: 'select',
      options: sizes,
    },
    style: {
      control: 'select',
      options: styles,
    },
  },
  args: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    label: 'Brand CTA',
    theme: 'light',
    type: types[0],
    brand: brands[0],
    size: sizes[0],
    style: styles[0],
  },
};

export default meta;

type Story = StoryObj<typeof BrandCTAComponent> & {
  label?: string;
};

const BASE_PROPS: Omit<BrandCTAComponentProps, 'component' | 'children'> = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  type: meta.args.type,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  style: meta.args.style,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  brand: meta.args.brand,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  size: meta.args.size,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  label: meta.args.label,

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  context: {
    isContextualEditing: true,
  },
};

const renderStory = (args: BrandCTAComponentProps) => {
  const fakeComposition = createFakeCompositionData('brandCTAComponent', args, {});
  console.log({ args });
  return (
    <UniformComposition data={fakeComposition}>
      <div
        data-theme={
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          args.theme
        }
        data-brand={
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          args.brand
        }
      >
        <BrandCTAComponent
          {...args}
          ctaParameters={{
            ...args,
            className: `cta-button-${
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              args.style
            }-${
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              args.type
            }`,
          }}
          component={{
            parameters: {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              label: {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                value: args.label,
              },
            },
          }}
        />
      </div>
    </UniformComposition>
  );
};

export const Default: Story = {
  args: {
    ...BASE_PROPS,
  },
  render: renderStory,
};
