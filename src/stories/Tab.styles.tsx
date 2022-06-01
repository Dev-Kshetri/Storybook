import styled from "styled-components";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";
import { FC } from "react";

export const TabStyled = styled(Box)`
  &.MuiBox-root {
    width: 100%;
    & .MuiButtonBase-root{
        text-transform:none;
        font-size:1rem;
        font-weight:600;
        &.Mui-selected{
            color:black;
        }
    }
  }
  
`;
const theme = createTheme({
    typography: {
        fontFamily: ["SantanderText-Light"].join(","),
        button: {
            textTransform: "none"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none"
                }
            }
        },

    },

});

interface TabComponentProps {
    children?: React.ReactNode;
}

export const TabComponent: FC<TabComponentProps> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <TabStyled>
                {children}
            </TabStyled>
        </ThemeProvider>
    );
};
