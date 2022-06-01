import { Meta, Story } from "@storybook/react";
import { Loader, LoaderProps } from './Loader';

const meta: Meta = {
    title: "santander/Loader",
    component: Loader
}
export default meta;

const Template: Story<LoaderProps> = (args) => <Loader {...args} />
export const Default = Template.bind({});
Default.args = {
}

