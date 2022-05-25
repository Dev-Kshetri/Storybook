import styled, { css } from "styled-components";
import FormControl from "@mui/material/FormControl";

export const TextFieldComponent = styled(FormControl)`
  
  width: 50%;
  box-shadow: 0px 0.5rem 24px 0px rgba(0, 0, 0, 0.15);
  border: 1px solid #deedf2;
  border-bottom: 1px solid #257fa4;
  background-color: transparent;

  &.MuiFormControl-root {
    font-family: "SantanderText-Light";
    & *,
    ::before,
    ::after,
    ::placeholder {
      font-family: "SantanderText-Light";
      font-weight: 600;
    }
  }

  .MuiFilledInput-root.MuiFilledInput-underline {
    background-color: transparent;
    border: 1px solid #deedf2;
    border-bottom: 0.8px solid #257fa4;
    &::before,
    &::after {
      border-bottom: 0.8px solid #257fa4;
    }
  }
  .MuiInputLabel-root.MuiInputLabel-formControl {
    margin-top: 10px;
    color: #444444;
    &::before,
    &::after,
    &* {
      color: #444444;
    }
  }
`;
