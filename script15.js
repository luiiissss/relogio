
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
}

function formatTime(number) {
    return number < 10 ? '0' + number : number;
}

setInterval(updateClock, 1000);

updateClock();
