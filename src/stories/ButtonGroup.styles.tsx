import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    santanderRed: {
        main: '#f10909',
    },
});


declare module '@mui/material/styles' {
    interface Palette {
        santanderRed: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        santanderRed?: PaletteOptions['primary'];
    }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        santanderRed: true;
    }
}

