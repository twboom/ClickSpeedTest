const startButton = document.getElementById('toggle');
const timer = document.getElementById('timer');
const clickCounter = document.getElementById('click-counter');

let state = 'READY';

let hits = [];
let count = 0;
let startTime = Date.now();

let timeInterval;
let timeTimeout;

function toggle(override) {
    // if (isRunning) {
    //     stop(override);
    //     startButton.innerHTML = 'Reset';
    // } else {
    //     start();
    //     startButton.innerHTML = 'Stop';
    // }
    // isRunning = !isRunning;

    switch(state) {

        case 'RUNNING': // Want it to stop
            stop(override);
            state = 'STOPPED'
            break;

        case 'STOPPED': // Want it to reset
            reset()
            state = 'READY'
            break;

        case 'READY': // Want it to start
            start();
            state = 'RUNNING'
            break;

    }
}

function start() {
    console.log('start')
    startButton.innerHTML = 'Stop';
    startButton.blur()
    timeInterval = setInterval(updateTimer, 10);
    document.addEventListener('keydown', handleKeyDown);
    startTime = Date.now();
    timeTimeout = setTimeout(stop, config.time)
};

function stop(override) {
    console.log('stop')
    clearTimeout(timeTimeout);
    document.removeEventListener('keydown', handleKeyDown);
    clearInterval(timeInterval);
    if (!override) {
        timer.innerHTML = config.time / 1000;
        toggle();
    };
    startButton.innerHTML = 'Reset';
};

function reset() {
    startButton.innerHTML = 'Start';
    count = 0;
    updateCounter();
    timer.innerHTML = '0';
}

function handleKeyDown(evt) {
    if (evt.key === ' ') {
        count++;
        updateCounter();
        hits.push({ time: Date.now() - startTime, count: count });
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