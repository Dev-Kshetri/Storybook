import { Meta, Story } from "@storybook/react";
import { Card, CardProps } from "./Card";
import AddIcon from "@mui/icons-material/Add";

const meta: Meta = {
    title: "santander/Card",
    component: Card,
};
export default meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;



export const Default = Template.bind({});
Default.args = {
    children: (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "0px"
            }}>
                <AddIcon />
                <h1 style={{ fontWeight: "900", color: "red" }}>Santander</h1>
                <b>Corporate & Investment Banking</b>
            </div>
        </>
    ),
};

export const CardSmall = Template.bind({});
CardSmall.args = {
    size: "small",
    children: (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "0px"
            }}>
                <AddIcon />
                <h1 style={{ fontWeight: "900", color: "red" }}>Santander</h1>
                <b>Corporate & Investment Banking</b>
            </div>
        </>
    ),
};
export const CardMedium = Template.bind({});
CardMedium.args = {
    size: "medium",
    children: (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "0px"
            }}>
                <AddIcon />
                <h1 style={{ fontWeight: "900", color: "red" }}>Santander</h1>
                <b>Corporate & Investment Banking</b>
            </div>
        </>
    ),
};
export const CardLarge = Template.bind({});
CardLarge.args = {
    size: "large",
    children: (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "0px"
            }}>
                <AddIcon />
                <h1 style={{ fontWeight: "900", color: "red" }}>Santander</h1>
                <b>Corporate & Investment Banking</b>
            </div>
        </>
    ),
};
export const CardAuto = Template.bind({});
CardAuto.args = {
    size: "auto",
    children: (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "0px"
            }}>
                <AddIcon />
                <h1 style={{ fontWeight: "900", color: "red" }}>Santander</h1>
                <b>Corporate & Investment Banking</b>
            </div>
        </>
    ),
};

