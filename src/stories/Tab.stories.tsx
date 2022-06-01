import { Meta, Story } from "@storybook/react";
import { Tabs, TabProps } from './Tab';

const meta: Meta = {
    title: "santander/Tab",
    component: Tabs
}
export default meta;

const Template: Story<TabProps> = (args) => <Tabs {...args} />



export const Default = Template.bind({});
Default.args = {
}


