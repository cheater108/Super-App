function formatTime(hours, minutes, sec) {
    const hrs = hours > 9 ? hours : "0" + hours;
    const mins = minutes > 9 ? minutes : "0" + minutes;
    const s = sec > 9 ? sec : "0" + sec;
    return { hrs, mins, s };
}

export default formatTime;
