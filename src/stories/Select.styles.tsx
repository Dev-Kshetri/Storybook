import styled, { css } from "styled-components";
import MuiButton from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

export type wrapper = { backgroundColor: string };
export const fonts = css`
  @import url(//db.onlinewebfonts.com/c/af33965373026b87eca335817c5f90b7?family=QNJFWV+SantanderText-Light);
  @font-face {
    font-family: "SantanderText-Light";
    src: url("//db.onlinewebfonts.com/t/af33965373026b87eca335817c5f90b7.eot");
    src: url("//db.onlinewebfonts.com/t/af33965373026b87eca335817c5f90b7.eot?#iefix")
        format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/af33965373026b87eca335817c5f90b7.woff2")
        format("woff2"),
      url("//db.onlinewebfonts.com/t/af33965373026b87eca335817c5f90b7.woff")
        format("woff"),
      url("//db.onlinewebfonts.com/t/af33965373026b87eca335817c5f90b7.ttf")
        format("truetype"),
      url("//db.onlinewebfonts.com/t/af33965373026b87eca335817c5f90b7.svg#QNJFWV+SantanderText-Light")
        format("svg");
  }
`;
export const Option = styled(MenuItem)`
  width:100%;
`;
export const SelectComponent = styled(FormControl) <wrapper>`
    ${fonts}
    box-shadow: 0px 0.5rem 24px 0px rgba(0, 0, 0, 0.063);
    border: 0.8px solid #deedf2;
    border-bottom: 0.8px solid #257fa4;
    &.MuiFormControl-root {
    font-family:"SantanderText-Light";
    & *,
    ::before,
    ::after,
    ::placeholder {
      font-family:"SantanderText-Light";
      font-weight: 600;
    }
  }
  .MuiFilledInput-root.MuiFilledInput-underline {
    background-color: ${props => props.backgroundColor || "transparent"};
    border: 1px solid #deedf2;
    border-bottom: 0.8px solid #257fa4;
    &::before,
    &::after {
      border-bottom: 0.8px solid #257fa4;
    }
    & *{
    background-color: transparent;
    }
  }
  .MuiInputLabel-root{
    &::before,&::after,&:hover,&:active,&.Mui-focused{
      color:#8b8b8b;
    }
  }
`;
export const SelectOpenStyles: Object = {
  transform: "rotate(90deg)",
  position: "absolute",
  right: "3%", zIndex: "-1",
  "&.disabled": {
    color: "gray"
  }
}
export const SelectCloseStyles: Object = {
  transform: "rotate(-90deg)",
  position: "absolute",
  right: "3%", zIndex: "-1",
  "& .disabled": {
    color: "gray"
  }
}

