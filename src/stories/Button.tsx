import { ButtonComponent } from './Button.styles'
import { ReactNode } from "react";

export interface ButtonProps {
    variant: "outlined" | "contained" | "empty";
    size: "small" | "medium" | "large";
    children?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    disabled: boolean;
}


export const Button = ({
    variant,
    size,
    startIcon,
    endIcon,
    children,
    disabled,
    ...props
}: ButtonProps) => {

    const MuiVariant = variant == "empty" ? "text" : variant;

    return (
        <ButtonComponent
            variant={MuiVariant}
            size={size}
            disabled={disabled}
            {...props}
        >
            {startIcon}
            <span>{children}</span>
            {endIcon}
        </ButtonComponent>
    )
}
