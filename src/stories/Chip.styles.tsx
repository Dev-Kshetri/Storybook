import Chip from '@mui/material/Chip';
import styled from "styled-components";


export interface ChipComponentProps {
    backgroundColor: string;
    borderColor: string;
    fontColor: string;
}

export const ChipComponent = styled(Chip) <ChipComponentProps>`
&.MuiButtonBase-root{
    font-weight: 600;
    border:1px solid ${props => props.borderColor};
    background-color: ${props => props.backgroundColor};
        *,*::before,*::after{
            font-family: "SantanderText-Light";
            color:${props => props.fontColor};
        }
}
`;