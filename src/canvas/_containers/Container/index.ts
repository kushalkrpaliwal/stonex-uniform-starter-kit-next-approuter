import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { ContainerProps as BaseContainerProps } from '../../../components/Container';
import { Container } from './Container';

export type ContainerProps = ComponentProps<BaseContainerProps, 'container-inner'>;

export const containerMappings = {
  container: Container,
};

export default Container;
