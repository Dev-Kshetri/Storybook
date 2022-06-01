import { CardComponent, CardComponentProps } from "./Card.styles";
import { FunctionComponent, ReactNode } from "react";


export interface CardProps extends CardComponentProps {
    size: "small" | "medium" | "large" | "auto";
    children?: ReactNode;
}


export const Card: FunctionComponent<CardProps> = ({ size = "small", children, borderColor = "#fff" }) => {
    return (
        <CardComponent className={`size-${size}`} borderColor={borderColor}>{children}</CardComponent>
    )
}
