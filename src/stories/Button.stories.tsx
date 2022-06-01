import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from './Button';
import AddIcon from '@mui/icons-material/Add';
import { Loader } from "./Loader";

const meta: Meta = {
    title: "santander/Button",
    component: Button
}
export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Contained = Template.bind({});
Contained.args = {
    children: "Click Me",
    variant: "contained",
    size: "large"
}

export const Outlined = Template.bind({});
Outlined.args = {
    children: "Click Me",
    variant: "outlined",
    size: "large"
}

export const Disabled = Template.bind({});
Disabled.args = {
    children: "Click Me",
    variant: "outlined",
    size: "large",
    disabled: true
}

export const Empty = Template.bind({});
Empty.args = {
    children: "Click Me",
    variant: "empty",
    size: "large",
}


export const StartIcon = Template.bind({});
StartIcon.args = {
    children: "Click Me",
    variant: "contained",
    size: "large",
    startIcon: <AddIcon />
}
export const EndIcon = Template.bind({});
EndIcon.args = {
    children: "Click Me",
    variant: "contained",
    size: "large",
    endIcon: <AddIcon />

}
export const LoadingIcon = Template.bind({});
LoadingIcon.args = {
    children: "Click Me",
    variant: "outlined",
    size: "large",
    startIcon: <Loader />
}