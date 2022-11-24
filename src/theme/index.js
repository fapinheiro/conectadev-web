import { createTheme } from '@material-ui/core/styles'

// https://mui.com/material-ui/customization/color/
import { colors } from '@material-ui/core';

const theme = createTheme({
    palette: {
        primary: {
            main: colors.indigo['A400']
        },
        secondary: {
            main: colors.orange['A700']
        }
    },
    typography: {
        h6: {
            fontWeight: '500',
            fontSize: '14px',
            letterSpacing: '-0.05px'
        }
    }
});

export default theme;