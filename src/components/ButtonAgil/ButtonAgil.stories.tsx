import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonAgil } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/ButtonAgil',
    component: ButtonAgil
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ButtonAgil>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonAgil> = args => (
    <ButtonAgil {...args}></ButtonAgil>
);

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
    classe: 'customButtonSmall'
};

export const Large = Template.bind({});
Large.args = {
    classe: 'customButtonLarge'
};
