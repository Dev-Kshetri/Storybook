import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from './Button';



export default {
    title: 'Santander/Button',
    component: Button,
    argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'New Component',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
    children: 'New Component',
    startIcon: <AddIcon />,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
    children: 'New Component',
    endIcon: <AddIcon />,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'New Component',
    variant: 'outlined',
};

export const Empty = Template.bind({});
Empty.args = {
    children: 'New Component',
    variant: 'empty',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'New Component',
    variant: 'outlined',
    disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
    children: 'New Component',
    variant: 'outlined',
    loading: true,
};