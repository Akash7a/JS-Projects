const clock = document.querySelector(".clock");

const showTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = hours >= 12 ? "pm" : "am";

    hours >= 12 ? hours = hours - 12 : hours = hours;
    hours = hours.toString().padStart(2, "0");  // Add leading zero if hours is less than 10
    minutes = minutes.toString().padStart(2, "0");  // Add leading zero if minutes is less than 10
    seconds = seconds.toString().padStart(2, "0");  // Add leading zero if seconds is less than 10
    clock.textContent = `${hours}:${minutes}:${seconds} ${period}`;
}
setInterval((showTime), 1000);