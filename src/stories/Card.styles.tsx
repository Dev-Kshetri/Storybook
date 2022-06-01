import Card from '@mui/material/Card';
import styled from "styled-components";



export interface CardComponentProps { borderColor: string };
export const CardComponent = styled(Card) <CardComponentProps>`
    box-sizing:border-box;
    &.MuiPaper-root{
        padding:10px;
        border: .5px solid ${prop => prop.borderColor};
        *,*::before,*::after{
            font-family: "SantanderText-Light";
        }
        &.size-small{
            width:250px;
            min-height:100px;
        }
        &.size-medium{
            width:350px;
            min-height:150px;
        }
        &.size-large{
            width:450px;
            min-height:250px;
        }
        &.size-auto{
            width:auto;
        }
    }
`;