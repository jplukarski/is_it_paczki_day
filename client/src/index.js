import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#f6685e',
            main: '#f44336',
            dark: '#aa2e25',
            contrastText: '#fff',
        },
        secondary: {
            light: '#c7f7d4',
            main: '#b9f6ca',
            dark: '#81ac8d',
            contrastText: '#000',
        },
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'));

serviceWorker.register();