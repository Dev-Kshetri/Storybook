import React, { HTMLAttributes, ReactNode } from "react";
import { FieldComponent } from "./Field.styles";

export interface FieldProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: string;
  children: ReactNode;
  onChange: () => void;
}

export const Field: React.FC<FieldProps> = ({
  label = "Textfield",
  ...props
}) => {
  return (
    <FieldComponent
      type="text"
      variant="outlined"
      id="outlined-basic"
      label="Outlined"
    ></FieldComponent>
  );
};
