import { Meta, Story } from "@storybook/react";
import { TextField, TextFieldProps } from './TextField';
import SearchIcon from '@mui/icons-material/Search';


const meta: Meta = {
    title: "santander/TextField",
    component: TextField
}
export default meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />


export const Default = Template.bind({});
Default.args = {
    label: "Type Something...",
    placeholder: "Placeholder Optional"
}

export const EndIcon = Template.bind({});
EndIcon.args = {
    label: "Type Something...",
    placeholder: "Placeholder Optional",
    endIcon: <SearchIcon />
}

export const Required = Template.bind({});
Required.args = {
    label: "Required*",
    placeholder: "Placeholder Optional",
    required: true,
    defaultValue: "Lorem ipsum dolor"
}

export const Multiline = Template.bind({});
Multiline.args = {
    label: "Multiline textfield",
    multiline: true,
    defaultValue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit dicta dolorum eligendi, voluptate placeat facilis esse reprehenderit blanditiis laborum, quia natus non laboriosam quae ullam voluptates porro qui sit!"
}
