import React from 'react';
import { BaseButton, Styles } from "./Button.styles";
import { Spinner } from './Loader';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'contained' | 'outlined' | 'empty';
    size?: 'small' | 'medium' | 'big';
    backgroundColor?: string;
    fontColor?: string;
    borderColor?: string;
    children: React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    loading?: boolean;
};

export const Button = ({
    children,
    startIcon,
    endIcon,
    variant = 'contained',
    loading = false,
    backgroundColor,
    size,
    fontColor,
    borderColor,
    ...rest
}: ButtonProps) => {
    if (loading) {
        rest.disabled = true;
        startIcon = <Spinner size="tiny" />;
    }
    const StyledButton = variant === 'contained'
        ? Styles.Contained
        : variant === 'outlined'
            ? Styles.Outlined
            : Styles.Empty;
    return (
        <StyledButton type="button" {...rest} className={`button-${size}`} style={{
            backgroundColor: backgroundColor,
            borderColor: borderColor,
        }}>
            {startIcon}
            <span
                style={{ color: fontColor }}
            >{children}</span>
            {endIcon}
        </StyledButton>
    );
};