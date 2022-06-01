import { FC } from "react";
import Button from "@mui/material/Button";
import { theme } from "./ButtonGroup.styles";
import { ThemeProvider } from "@mui/material";
import ButtonGroups from "@mui/material/ButtonGroup";

export interface ButtonGroupProps {
    fontStyle?: "Uppercase" | "Lowercase" | "Capitalize" | "Default";
    variant?: "Outlined" | "Empty" | "Contained";
    orientation?: "Horizontal" | "Vertical";
    colors?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | "santanderRed";
}

export const ButtonGroup: FC<ButtonGroupProps> = ({ colors, fontStyle = "none", variant = "Contained", orientation = "horizontal" }) => {

    const textTransformStyle = fontStyle === "Uppercase" ? "uppercase" : fontStyle === "Lowercase" ? "lowercase" : fontStyle === "Capitalize" ? "capitalize" : "none";
    const buttonGroupVariant = variant === "Outlined" ? "outlined" : variant === "Contained" ? "contained" : (variant === "Empty" && "text");
    const buttonGroupOrintation = orientation === "Vertical" ? "vertical" : "horizontal";

    return (
        <ThemeProvider theme={theme}>
            <ButtonGroups
                variant={buttonGroupVariant || "contained"}
                aria-label="outlined primary button group"
                sx={{ button: { textTransform: textTransformStyle } }}
                orientation={buttonGroupOrintation}
                color={colors}
            >
                <Button>Pending</Button>
                <Button>Error</Button>
                <Button>All</Button>
            </ButtonGroups>
        </ThemeProvider>

    );
};
