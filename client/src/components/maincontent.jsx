import React, { useState, useEffect } from 'react';
import NotTheDay from './notpacskiday'
import TheDay from './itspacskiday'

export default function MainContent() {
    const [date, setDate] = useState(new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }))
    // const [paczkiday, setPaczkiday] = useState("February 6, 2020")
    const [paczkiday, setPaczkiday] = useState("February 25, 2020")


    return (
        date === paczkiday ? <TheDay /> : <NotTheDay />
    )

}