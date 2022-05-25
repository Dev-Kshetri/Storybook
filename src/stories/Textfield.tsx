import { TextFieldComponent } from "./TextField.styles";
import { ReactNode } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";

export interface TextFieldProps {
  label: string;
  placeholder: string;
  startIcon?: ReactNode;
  endIcon: ReactNode;
  defaultValue: string;
  multiline: boolean;
  required: boolean;
}

export const TextField = ({
  label,
  placeholder,
  endIcon,
  multiline = false,
  defaultValue,
  required,
  ...props
}: TextFieldProps) => {
  return (
    <TextFieldComponent>
      <InputLabel htmlFor="filled-adornment">{label}</InputLabel>
      <FilledInput
        id="filled-adornment"
        placeholder={placeholder}
        multiline={multiline}
        endAdornment={<InputAdornment position="end">{endIcon}</InputAdornment>}
        defaultValue={defaultValue}
        required={required}
        {...props}
      />
    </TextFieldComponent>
  );
};
