import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";


function Sewer() {
    const [timer, setTimer] = useState("")
    const starts = [
        [7, 10],
        [8, 0],
        [8, 55],
        [10, 0],
        [10, 55],
        [11, 50],
        [12, 45],
        [13, 40],
        [14, 35],
        [15, 30],
        [16, 25],
    ]
    const ends = [
        [7, 55],
        [8, 45],
        [9, 40],
        [10, 45],
        [11, 40],
        [12, 35],
        [13, 30],
        [14, 25],
        [14, 25],
        [15, 20],
        [16, 15],
        [17, 10],
        [23, 14],
    ]
    useEffect(() => {

        setInterval(() => {
            let hasFound = false
            ends.forEach(e => {
                const targetHour = e[0]
                const targetMinute = e[1]

                // Get the current date and time
                const currentDate = new Date();

                // Set the target date with the same year, month, and day as the current date
                const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), targetHour, targetMinute);

                // Calculate the time difference in milliseconds
                const timeDifference = targetDate.getTime() - currentDate.getTime();

                // Check if the target time has already passed today
                if (timeDifference > 0 && !hasFound) {
                    hasFound = true
                    // const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
                    let minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                    let secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);
                    let first
                    let second
                    if (minutesRemaining < 10) {
                        first = `0${minutesRemaining}`
                    } else {
                        first = minutesRemaining.toString()
                    }
                    if (secondsRemaining < 10) {
                        second = `0${secondsRemaining}`
                    } else {
                        second = secondsRemaining.toString()
                    }

                    setTimer(`${first}:${second}`)
                    return true
                } else if (timeDifference <= 0) {
                    setTimer(`dneska uz laces`)
                }
            });
        }, 1000)
    }, [])

    return (
        <div className={`content timer `}>
            <Meta title="Timer" />
            <h2>čas do konce hodiny:</h2>
            <h1 className={`${timer === "dneska uz laces" ? "endedTimer" : ""}`}>{timer}</h1>
        </div>
    );
}

export default Sewer;
