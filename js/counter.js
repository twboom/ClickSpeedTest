const startButton = document.getElementById('toggle');
const timer = document.getElementById('timer');
const clickCounter = document.getElementById('click-counter');

let isRunning = false;

let count = 0;
let startTime = 0;

let timeInterval;

function toggle(evt) {
    if (isRunning) {
        if (evt instanceof Event) { stop(true); }
        startButton.innerHTML = 'Start';
    } else {
        start();
        startButton.innerHTML = 'Stop';
    }
    isRunning = !isRunning;
}

function start() {
    count = 0;
    startButton.blur()
    timeInterval = setInterval(updateTimer, 10);
    document.addEventListener('keydown', handleKeyDown);
    startTime = Date.now();
    setTimeout(stop, config.time)
    updateCounter();
};

function stop(override) {
    document.removeEventListener('keydown', handleKeyDown);
    clearInterval(timeInterval);
    if (!override) { timer.innerHTML = config.time / 1000; };
    toggle();
};

function handleKeyDown(evt) {
    if (evt.key === ' ') {
        count++;
        updateCounter();
    }
}

async function updateCounter() {
    clickCounter.innerHTML = count;
};

async function updateTimer() {
    timer.innerHTML = (Date.now() - startTime) / 1000;
}

function main() {
    startButton.addEventListener('click', toggle)
};

main()