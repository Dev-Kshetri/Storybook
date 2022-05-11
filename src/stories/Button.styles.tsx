import styled, { css } from "styled-components";

const color_Primary = "#ec0000";
const color_Secondary = "#cccccc";
const color_light = "#ffffff";

export const BaseButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
  height: 48px;
  padding: 12px 20px;

  &.button-small{
    height: 35px;
    padding: 10px 15px;
  }
  &.button-medium{
    height: 43px;
    padding: 12px 18px;
  }
  &.button-big{
    height: 48px;
    padding: 14px 20px;
  }

  && {
    //Button Disabled
    ${(props) =>
    props.disabled &&
    css`
        box-sizing: border-box;
        border: 1px solid ${color_Secondary};
        background-color: ${color_light};
        cursor: default;
      `}
    span {
      ${(props) =>
    props.disabled &&
    css`
          color: ${color_Secondary};
        `}
    }
    svg {
      ${(props) =>
    props.disabled &&
    css`
          fill: ${color_Secondary};
        `}
    }
  }
`;

export const Styles = {
  //Button Outlined
  Outlined: styled(BaseButton)`
    box-sizing: border-box;
    border: 1px solid ${color_Primary};
    border-radius: 40px;
    background-color: ${color_light};
    box-shadow: 0 3px 4px 0 #0000001e;
    span {
      color: ${color_Primary};
    }
    svg {
      fill: ${color_Primary};
    }
  `,
  //Button Contained
  Contained: styled(BaseButton)`
    border-radius: 40px;
    background-color: ${color_Primary};
    box-shadow: 0 3px 4px 0 #0000001e;
    span {
      color: ${color_light};
      font-weight: bold;
    }
    svg {
      fill: ${color_light};
    }
  `,
  //Button Empty
  Empty: styled(BaseButton)`
    background-color: transparent;
    span {
      color: ${color_Primary};
    }
    svg {
      fill: ${color_Primary};
    }
  `,
};
