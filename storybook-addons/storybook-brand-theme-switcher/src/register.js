import { addons, types } from '@storybook/manager-api';
import { ADDON_ID, TOOL_ID } from './constants';
import { Tool } from './Tool';

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Storybook - Stonex Selector',
    match: ({ viewMode }) => viewMode === 'story',
    render: Tool,
  });
});
