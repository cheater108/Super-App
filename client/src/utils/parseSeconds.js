function parseSeconds(sec) {
    const HOUR_RATE = 3600;
    const MINUTE_RATE = 60;

    const hours = Math.floor(sec / HOUR_RATE);
    sec = sec % HOUR_RATE;
    const minutes = Math.floor(sec / MINUTE_RATE);
    sec = sec % MINUTE_RATE;
    return { hours, minutes, sec };
}

export default parseSeconds;
