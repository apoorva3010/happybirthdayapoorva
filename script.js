const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const minsel = document.getElementById('mins');
const secel = document.getElementById('seconds');

const bday = '30 Oct 2021';

function countdown() {
    const birthday = new Date(bday);
    const currentDate = new Date();
    const seconds = Math.floor((birthday - currentDate)/1000);
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    const secs = Math.floor(seconds % 60);

    daysel.innerHTML = days;
    hoursel.innerHTML = hours;
    minsel.innerHTML = minutes;
    secel.innerHTML = secs;
}
//init call
countdown();

setInterval(countdown, 1000);
