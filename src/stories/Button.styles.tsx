import styled, { css } from "styled-components";
import MuiButton from "@mui/material/Button";

const primary: string = "#ec0000";
const secondary: string = "#cccccc";
const light: string = "#ffffff";

//ButtonSizes Change
const ButtonSizes = css`
  &.MuiButton-sizeSmall {
  }
  &.MuiButton-sizeMedium {
  }
  &.MuiButton-sizeLarge {
  }
`;

export const ButtonComponent = styled(MuiButton)`
  //Global Button Styles
  box-shadow: 0 3px 4px 0 #0000001e;
  display: flex;
  gap: 0.2rem;
  &.MuiButton-root {
    & *,
    ::before,
    ::after,
    ::placeholder {
      font-family: "SantanderText-Light";
      font-weight: 600;
    }
  }

  //Contained Button
  &.MuiButton-root.MuiButton-contained {
    text-transform: initial;
    border-radius: 40px;
    background-color: ${primary};
    border: 0.5px solid ${primary};
    box-shadow: 0;
    &.Mui-disabled {
      color: ${secondary};
      background-color: ${light};
      border: 0.5px solid ${secondary};
    }
    &:hover,
    &:focus,
    &:active {
      background-color: ${primary};
    }
    ${ButtonSizes}
  }
  //Outlined Button
  &.MuiButton-root.MuiButton-outlined {
    text-transform: initial;
    border-radius: 40px;
    color: ${primary};
    border-color: ${primary};
    &.Mui-disabled {
      color: ${secondary};
      background-color: ${light};
      border: 0.5px solid ${secondary};
    }
    ${ButtonSizes}
    //Loader
                div {
      width: 1.5em;
      height: 1.5em;
    }
  }
  //Empty Button
  &.MuiButton-root.MuiButton-empty {
    text-transform: initial;
    border-radius: 40px;
    &.Mui-disabled {
      color: ${secondary};
      background-color: ${light};
      border: 0.5px solid ${secondary};
    }
    ${ButtonSizes}
  }
`;
