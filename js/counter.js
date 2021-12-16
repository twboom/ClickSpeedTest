const start = document.getElementById('start');
const timer = document.getElementById('timer');
const clickCounter = document.getElementById('click-counter');

function run(time) {
    let count = 0;

    document.addEventListener('keydown', evt => {
        if (evt.key === ' ') {
            count++
        }
        updateCounter(count)
    })

    setTimeout(_ => {

    })
}

function start() {};

function stop() {};

function updateCounter(count) {
    clickCounter.innerHTML = count;
}