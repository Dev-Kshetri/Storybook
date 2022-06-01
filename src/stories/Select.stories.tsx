import { Meta, Story } from "@storybook/react";
import Option, { Select, SelectProps } from './Select';


const meta: Meta = {
    title: "santander/Select",
    component: Select
}
export default meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />


const fruits = [
    { name: "Apple", value: "apple" },
    { name: "Orange", value: "orange" },
    { name: "Banana", value: "banana" },
]

export const Small = Template.bind({});
Small.args = {
    label: "Users", size: "small", selectOptions: fruits

}
export const Medium = Template.bind({});
Medium.args = {
    label: "Clients", size: "medium", selectOptions: fruits

}
export const Large = Template.bind({});
Large.args = {
    label: "Country", size: "large", selectOptions: fruits
}



