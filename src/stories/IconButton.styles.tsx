import styled from "styled-components";
import IconBtn from "@mui/material/IconButton";

const defaultColor: string = "#9bc3d3";
const primaryColor: string = "#ec3939";
const darkColor: string = "#333";

type ButtonIconProps = {
  backgroundColor: string;
  edgesColor: string;
  variant: "default" | "outlined" | "filled";
};

export const IconButton = styled(IconBtn) <ButtonIconProps>`
  height: 45px;
  width: 45px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.12);
  &.MuiButtonBase-root {
    //Default Styles
    &.default {
      background-color: ${(props) => props.backgroundColor || "red"};
      border: 1.5px solid ${(props) => props.edgesColor || "red"};
      &:hover {
        background-color: ${(props) => props.backgroundColor || "red"};
      }
      svg {
        fill: ${(props) => props.edgesColor || "white"};
      }
    }
    //Outlined Styles
    &.outlined {
      background-color: transparent;
      border: 1.5px solid ${(props) => props.edgesColor || "black"};
      &:hover {
        background-color: transparent;
      }
      svg {
        fill: ${(props) => props.edgesColor || "black"};
      }
    }
    //Filled Styles
    &.filled {
      background-color: ${(props) => props.backgroundColor || "red"};
      border: 1.5px solid transparent;
      &:hover {
        background-color: ${(props) => props.backgroundColor || "red"};
      }
      svg {
        fill: ${(props) => props.edgesColor || "white"};
      }
    }
  }
`;
