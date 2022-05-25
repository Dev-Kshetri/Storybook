import { Meta, Story } from "@storybook/react";
import { IconButton, IconButtonProps } from './IconButton';
import AddIcon from '@mui/icons-material/Add';

const meta: Meta = {
    title: "santander/IconButton",
    component: IconButton
}
export default meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />


export const Default = Template.bind({});
Default.args = {
    icon: <AddIcon />
}



