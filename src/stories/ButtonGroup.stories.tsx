import { Meta, Story } from "@storybook/react";
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

const meta: Meta = {
    title: "santander/ButtonGroup",
    component: ButtonGroup
}
export default meta;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />


export const Default = Template.bind({});
Default.args = {
}

