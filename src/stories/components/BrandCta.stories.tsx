import type { Meta, StoryObj } from '@storybook/react';
import { UniformComposition } from '@uniformdev/canvas-react';
import { createFakeCompositionData } from '../utils';
import { BrandCTAComponent } from '@/canvas/BrandCTA/BrandCTAComponent';
import { BrandCTAComponentProps, BrandCTAProps, sizes, styles, types } from '@/canvas/BrandCTA';
import { useEffect } from 'react';

type StoryProps = BrandCTAProps & {
  label?: string;
};

type PropsAndCustomArgs = BrandCTAComponentProps & StoryProps;

const meta: Meta<PropsAndCustomArgs> = {
  title: 'BrandCTAComponent',
  component: BrandCTAComponent,
  argTypes: {
    label: {
      control: 'text',
    },
    size: {
      control: 'inline-radio',
      options: sizes,
    },
    style: {
      control: 'radio',
      options: styles,
    },
    type: {
      control: 'radio',
      options: types,
    },
  },
  args: {
    label: 'Brand CTA',
    size: sizes[0],
    style: styles[0],
    type: types[0],
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

const BASE_PROPS: StoryProps = {
  label: 'Brand CTA',
  size: sizes[0],
  style: styles[0],
  type: types[0],
};

export const Default: Story = {
  args: {
    ...BASE_PROPS,
  },
  render: args => {
    const fakeComposition = createFakeCompositionData('brandCTAComponent', args, {});

    useEffect(() => {
      document.documentElement.dataset.theme = 'light';
      document.documentElement.dataset.brand = 'stonex';
    }, []);

    return (
      <UniformComposition data={fakeComposition}>
        <BrandCTAComponent
          ctaParameters={{
            className: `cta-button-${args.style}-${args.type}`,
            size: args.size,
            style: args.style,
            type: args.type,
          }}
          topSpacing={{
            label: '',
            value: '',
          }}
          bottomSpacing={{
            label: '',
            value: '',
          }}
          component={{
            type: fakeComposition.type,
            parameters: {
              label: {
                type: 'text',
                value: args.label,
              },
            },
          }}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          context={{
            isContextualEditing: true,
          }}
        />
      </UniformComposition>
    );
  },
};
