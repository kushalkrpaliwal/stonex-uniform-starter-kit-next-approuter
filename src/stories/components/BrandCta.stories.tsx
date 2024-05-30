// import type { Meta, StoryObj } from '@storybook/react';
// // import { UniformComposition } from '@uniformdev/canvas-react';
// // import { createFakeCompositionData } from '../utils';
// import StonexThemePackComponent, { StonexThemePackProps } from '@/canvas/StonexThemePackComponent';
//
// const meta: Meta<typeof StonexThemePackComponent> = {
//   title: 'StonexThemePackComponent',
//   component: StonexThemePackComponent,
// };
//
// export default meta;
// type Story = StoryObj<typeof StonexThemePackComponent>;
//
// const BASE_PROPS: Omit<StonexThemePackProps, 'component' | 'children'> = {
//   headingTag: 'h2',
//   spacing: 'sm',
//   title: 'Stonex Theme Pack',
//   component: {
//     parameters: {
//       text: {
//         value: 'Stonex Theme Pack',
//       },
//     },
//   },
//   context: {
//     isContextualEditing: true,
//   },
// };
//
// const renderStory = (args: StonexThemePackProps) => {
//   // const fakeComposition = createFakeCompositionData('stonexThemePackComponent', args, {});
//   return (
//     // <UniformComposition data={fakeComposition}>
//     <StonexThemePackComponent {...args} />
//     // </UniformComposition>
//   );
// };
//
// export const Default: Story = {
//   args: BASE_PROPS,
//   render: renderStory,
// };
//
// export const Small: Story = {
//   args: {
//     ...BASE_PROPS,
//     spacing: 'sm',
//     component: {
//       type: 'stonexThemePackComponent',
//       variant: 'ImageLeft',
//     },
//   },
//   render: renderStory,
// };
//
// export const H1: Story = {
//   args: {
//     ...BASE_PROPS,
//     headingTag: 'h1',
//     component: {
//       type: 'stonexThemePackComponent',
//       variant: 'ImageRight',
//     },
//   },
//   render: renderStory,
// };

const BrandCta = () => {};
export default BrandCta;
