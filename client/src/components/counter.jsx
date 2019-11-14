import React, { useState, useEffect } from 'react';

export default function Counter() {
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
            Days: {days} |
            Hours: {hours} |
            Minutes: {minutes} |
            Seconds: {seconds}
        </>
    );
}