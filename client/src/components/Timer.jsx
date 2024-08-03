import styles from "./Timer.module.css";
import { useEffect, useState } from "react";
import up from "../assets/up-arrow.svg";
import down from "../assets/down-arrow.svg";
import parseSeconds from "../utils/parseSeconds";
import formatTime from "../utils/formatTime";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const HOUR_RATE = 3600;
const MINUTE_RATE = 60;

function Timer() {
    const [time, setTime] = useState(10);
    const [playing, setPlaying] = useState(false);
    const [timmer, setTimmer] = useState(10);
    const [reset, setReset] = useState(false);
    const [signal, setSignal] = useState(null);

    // time variable for changing time and displaying in countdown,
    // timmer varaible keeps track for initial time and displayed that i.e constant.
    const { hours, minutes, sec } = parseSeconds(time);
    const {
        hours: s_hours,
        minutes: s_minutes,
        sec: s_secs,
    } = parseSeconds(timmer);

    const { hrs, mins, s } = formatTime(hours, minutes, sec);
    const {
        hrs: s_hrs,
        mins: s_mins,
        s: s_sec,
    } = formatTime(s_hours, s_minutes, s_secs);

    function increaseHandler(rate) {
        if (!playing) {
            setTime(time + rate);
            setTimmer(time + rate);
        }
    }

    function decreaseHandle(rate) {
        if (playing) return;
        if (rate === HOUR_RATE) {
            if (hours !== 0) {
                setTime(time - rate);
                setTimmer(time - rate);
            }
        } else if (rate === MINUTE_RATE) {
            if (minutes !== 0) {
                setTime(time - rate);
                setTimmer(time - rate);
            }
        } else {
            if (sec !== 0) {
                setTime(time - rate);
                setTimmer(time - rate);
            }
        }
    }

    function startHandler() {
        if (time > 0 && reset == false) {
            setReset(true);
            setPlaying(!playing);
            if (signal) clearTimeout(signal);
            return;
        }
        if (time > 0) {
            if (signal) clearTimeout(signal);
            setPlaying(!playing);
        }
    }

    function resetHandler() {
        if (signal) {
            clearTimeout(signal);
            setSignal(null);
        }

        setPlaying(false);
        setTime(0);
        setTimmer(0);
        setReset(false);
    }
    useEffect(() => {
        if (playing && time > 0) {
            setSignal(
                setTimeout(() => {
                    setTime(time - 1);
                }, 1000)
            );
        }
        if (time === 0) {
            setPlaying(false);
            setReset(false);
        }
    }, [time, playing]);

    return (
        <div className={styles.container}>
            <div className={styles.time_box}>
                <p className={styles.timmer_text}>
                    {hrs}:{mins}:{s}{" "}
                </p>
                <div className={styles.progress_container}>
                    <CircularProgressbar
                        value={time}
                        maxValue={timmer}
                        strokeWidth={3}
                        styles={buildStyles({
                            strokeLinecap: "round",

                            pathColor: timmer > 0 ? "#ff6a6a" : "#191e39",
                            textColor: "#f88",
                            trailColor: "#191e39",
                            backgroundColor: "#3e98c7",
                            pathTransitionDuration: 0.5,
                        })}
                    />
                </div>{" "}
            </div>
            <div className={styles.controls}>
                <div className={styles.tiles}>
                    <div className={styles.tile}>
                        <p>Hours</p>
                        <img
                            src={up}
                            onClick={() => increaseHandler(HOUR_RATE)}
                            className={styles.control_btn}
                            alt=""
                        />
                        <p className={styles.time_text}>{s_hrs}</p>
                        <img
                            src={down}
                            onClick={() => decreaseHandle(HOUR_RATE)}
                            className={styles.control_btn}
                            alt=""
                        />
                    </div>
                    <div className={styles.colon}>:</div>
                    <div className={styles.tile}>
                        <p>Minutes</p>
                        <img
                            src={up}
                            onClick={() => increaseHandler(MINUTE_RATE)}
                            className={styles.control_btn}
                            alt=""
                        />
                        <p className={styles.time_text}>{s_mins}</p>
                        <img
                            src={down}
                            onClick={() => decreaseHandle(MINUTE_RATE)}
                            className={styles.control_btn}
                            alt=""
                        />
                    </div>
                    <div className={styles.colon}>:</div>
                    <div className={styles.tile}>
                        <p>Seconds</p>
                        <img
                            src={up}
                            onClick={() => increaseHandler(1)}
                            className={styles.control_btn}
                            alt=""
                        />
                        <p className={styles.time_text}>{s_sec}</p>
                        <img
                            src={down}
                            onClick={() => decreaseHandle(1)}
                            className={styles.control_btn}
                            alt=""
                        />
                    </div>
                </div>
                <button onClick={startHandler} className={styles.btn}>
                    {playing ? "Stop" : "Start"}
                </button>
            </div>

            {reset && (
                <div className={styles.reset} onClick={resetHandler}>
                    &#8635;
                </div>
            )}
        </div>
    );
}

export default Timer;
