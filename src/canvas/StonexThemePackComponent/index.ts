import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { StonexThemePackComponent } from './StonexThemePackComponent';

export type StonexThemePackProps = ComponentProps<{
  headingTag: Types.HeadingStyles;
}>;

export const stonexThemePackMappings = {
  stonexThemePackComponent: StonexThemePackComponent,
};

export default StonexThemePackComponent;
