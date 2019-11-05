import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({

    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 50
    },

}));

export default function Counter() {

    const classes = useStyles();
    return (
        <>
            <TextField
                label="Days"
                defaultValue="123"
                fullWidth={false}
                className={classes.textField}
                margin="normal"
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
            />
            <TextField
                label="Hours"
                defaultValue="12"
                className={classes.textField}
                margin="normal"
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
            />
            <TextField
                label="Minutes"
                defaultValue="23"
                className={classes.textField}
                margin="normal"
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
            />
            <TextField
                label="Seconds"
                defaultValue="13"
                className={classes.textField}
                margin="normal"
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
            />
        </>
    );
}