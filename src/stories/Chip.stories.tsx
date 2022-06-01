import { Meta, Story } from "@storybook/react";
import { Chip, ChipProps } from './Chip';

const meta: Meta = {
    title: "santander/Chip",
    component: Chip
}
export default meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />


export const Default = Template.bind({});
Default.args = {
    label: "defaultchip"
}

export const Delete = Template.bind({});
Delete.args = {
    label: "deletechip",
    removableIcon: true
}
