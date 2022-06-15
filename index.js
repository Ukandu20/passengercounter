/* This is a query selector. It is selecting the class time and date. */
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * It takes a date object, gets the hours, minutes, and seconds, and returns a string with the time in
 * 12 hour format.
 * @param date - The date object to format.
 * @returns a string with the time in the format of HH:MM:SS AM/PM.
 */
function formatTime(date) {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours > 12 ;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm ? "PM" : "AM"}`;
}

/**
 * The function takes a date object as an argument and returns a string with the day of the week, the
 * month, the day of the month, and the year.
 * @param date - The date to format.
 * @returns The day of the week, the month, the day of the month, and the year.
 */
function formatDate(date) {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    const day = DAYS[date.getDay()];
    const month = MONTHS[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    return `${day}, ${month} ${dayOfMonth} ${year}`;

} 

/* Setting the time and date to update every second. */
setInterval(() => {
    const now = new Date();
    timeElement.innerText = formatTime(now);
    dateElement.innerText = formatDate(now);
}, 1000);




/**
 * When the user clicks the button, the counter variable is increased by one and the new value is
 * displayed in the paragraph element with the id of counter.
 */
let counter = 0;
function enter() {
    counter++;
    document.getElementById("counter").innerText = counter;
}

/**
 * When the user clicks the button, the counter variable is decremented by 1 and the counter element's
 * innerText is set to the value of the counter variable.
 */
function exit() {
    counter--;
    document.getElementById("counter").innerText = counter;
}

/**
 * The function is called reset and it sets the counter variable to 0 and then it sets the innerText of
 * the element with the id of counter to the value of the counter variable.
 */
function reset() {
    counter = 0;
    document.getElementById("counter").innerText = counter;
}

