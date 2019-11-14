import React, { useState, useEffect } from 'react';
import Counter from './counter';

export default function MainContent() {
    const [date, setDate] = useState(new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }))

    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }));
    }

    return (
        <>
            <div>
                It is not Paczki Day today. It is {date}
            </div>
            <div>
                Countdown until Paczki Day 2020 (February 25th)
            </div>
            <Counter />
        </>
    );
}