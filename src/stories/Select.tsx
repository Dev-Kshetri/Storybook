import React, { FC, ReactNode } from "react";
import InputLabel from "@mui/material/InputLabel";
import SelectElement, { SelectChangeEvent } from "@mui/material/Select";
import {
    SelectComponent,
    SelectOpenStyles,
    SelectCloseStyles,
    Option,
} from "./Select.styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default Option;

export interface SelectProps {
    label?: string;
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    selectOptions: Array<{ name: string; value: string }>;
    backgroundColor: string;
    onChange: (value: string | number) => void;
}
export const Select: FC<SelectProps> = ({
    size,
    label,
    disabled,
    backgroundColor,
    selectOptions,
    ...props
}) => {
    const [age, setAge] = React.useState("");
    const [isOpen, setIsOpen] = React.useState<Boolean>(false);
    console.log(isOpen);

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    const width = size === "small" ? 200 : size === "medium" ? 500 : 800;
    const svgDisabledColor = !disabled
        ? { fill: "#f84f4f" }
        : { fill: "#bababa" };
    const SelectCss = isOpen
        ? { ...SelectOpenStyles, ...svgDisabledColor }
        : { ...SelectCloseStyles, ...svgDisabledColor };
    return (
        <SelectComponent
            variant="filled"
            sx={{ marginBottom: 3, minWidth: width }}
            backgroundColor={backgroundColor}
        >
            <InputLabel>{label}</InputLabel>
            <SelectElement
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
                autoWidth={true}
                IconComponent={() => <ArrowBackIosIcon style={SelectCss} />}
                placeholder={"Fruits"}
                defaultValue={age}
                disabled={disabled}
                style={{ zIndex: "100" }}
                onOpen={() => {
                    setIsOpen(true);
                }}
                onClose={() => {
                    setIsOpen(false);
                }}
            >
                <Option
                    value={10}
                    style={{ minWidth: width, height: "0px" }}
                    disabled
                ></Option>
                {selectOptions && selectOptions.map((item) => (
                    <Option key={item.value} value={item.value}>
                        {item.name}
                    </Option>
                ))}
            </SelectElement>
        </SelectComponent>
    );
};
