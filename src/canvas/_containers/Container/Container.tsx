import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import BaseContainer from '../../../components/Container';
import { ContainerProps } from '.';

export const Container: FC<ContainerProps> = ({ component, slots, context, ...props }) => (
  <BaseContainer {...props} containerVariant={component?.variant}>
    <div className={'w-screen-width shadow-2'}>w-screen-width</div>
    <UniformSlot context={context} slot={slots['container-inner']} data={component} />
  </BaseContainer>
);
