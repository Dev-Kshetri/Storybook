import { FC } from "react";
import { ChipComponent } from "./Chip.styles";

export interface ChipProps {
    backgroundColor?: string;
    borderColor: string;
    fontColor?: string;
    label: string;
    removableIcon: boolean;
    onDelete?: (() => void);
    onClick?: (() => void);
}

export const Chip: FC<ChipProps> = ({
    backgroundColor,
    label,
    onDelete,
    fontColor,
    onClick,
    borderColor,
    removableIcon = false,
}) => {
    return (
        <ChipComponent
            backgroundColor={backgroundColor!}
            fontColor={fontColor!}
            label={label}
            borderColor={borderColor}
            onDelete={removableIcon ? onDelete : undefined}
            onClick={removableIcon ? onClick : undefined}
        >
        </ChipComponent>
    );
};
