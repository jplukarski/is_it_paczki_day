import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import mydate from 'current-date'


const useStyles = makeStyles(theme => ({

    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 80
    },

}));

export default function Counter() {

    const classes = useStyles();

    const [time, setTime] = useState(mydate('time'))


    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setTime(mydate('time'));
    }
    return (
        <>
            <TextField
                label="Days"
                value="123"
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
                value={time[0] + time[1]}
                className={classes.textField}
                margin="normal"
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
            />
            <TextField
                label="Minutes"
                value={time[3] + time[4]}
                className={classes.textField}
                margin="normal"
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
            />
            <TextField
                label="Seconds"
                value={time[6] + time[7]}
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