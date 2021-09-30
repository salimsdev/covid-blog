import { createTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import teal from '@material-ui/core/colors/teal';

const theme = createTheme({
    palette: {
        primary: deepPurple,
        secondary: teal
    }
});

export default theme;