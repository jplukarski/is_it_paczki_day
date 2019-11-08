import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 80
    },
}));

export default function Counter() {

    const classes = useStyles();

    const [date, setDate] = useState(new Date())
    const [paczkiDay] = useState(Date.parse("25 Feb 2020 00:00:00 CST"))
    const [today, setToday] = useState(Date.parse(date))
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)





    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
        setToday(Date.parse(date));

        var diff = Math.abs(paczkiDay - today)
        var diffDays = Math.floor(diff / 86400000)
        var diffHours = Math.floor((diff % 86400000) / 3600000)
        var diffMinutes = Math.floor(((diff % 86400000) % 3600000) / 60000)
        var diffSeconds = Math.floor((((diff % 86400000) % 3600000) % 60000) / 1000)
        setDays(diffDays)
        setHours(diffHours)
        setMinutes(diffMinutes)
        setSeconds(diffSeconds)

    }
    return (
        <>
            <TextField
                label="Days"
                value={days}
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
                value={hours}
                className={classes.textField}
                margin="normal"
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
            />
            <TextField
                label="Minutes"
                value={minutes}
                className={classes.textField}
                margin="normal"
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
            />
            <TextField
                label="Seconds"
                value={seconds}
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