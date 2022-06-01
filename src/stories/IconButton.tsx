import { FC } from "react";
import { IconButton as IconButtonComponent } from "./IconButton.styles";

export interface IconButtonProps {
    icon: JSX.Element;
    backgroundColor: string;
    variant: "default" | "outlined" | "filled";
    edgesColor: string;
}

export const IconButton = ({
    icon,
    backgroundColor,
    edgesColor,
    variant = "default",
    ...props
}: IconButtonProps) => {


    return (
        <IconButtonComponent
            backgroundColor={backgroundColor}
            edgesColor={edgesColor}
            variant={variant}
            className={variant}
        >
            {icon}
        </IconButtonComponent>
    )
}
