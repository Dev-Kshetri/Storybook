import { Meta, Story } from "@storybook/react";
import { Field, FieldProps } from './Field';

const meta: Meta = {
    title: "santander/Field",
    component: Field
}
export default meta;

const Template: Story<FieldProps> = (args) => <Field {...args} />
export const Default = Template.bind({});
Default.args = {
    label: "TextField"
}

