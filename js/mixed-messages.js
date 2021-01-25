let element = document.getElementById('button');
let message = document.getElementById('message');

const random = Math.floor((Math.random()*10)+1);

const getMessage = random => {
    if (random === 1) {
        message.innerHTML = 'Your future looks bleak.'
    } else if (random === 2) {
        message.innerHTML = 'Try again.'
    } else if (random === 3) {
        message.innerHTML = 'The answer is uncertain. Tread carefully.'
    } else if (random === 4) {
        message.innerHTML = 'The time is now.'
    } else if (random === 5) {
        message.innerHTML = 'There is no time like the present.'
    } else if (random === 6) {
        message.innerHTML = 'Look inward for the answer.'
    } else if (random === 7) {
        message.innerHTML = 'Seek advice from a close friend.'
    } else if (random === 8) {
        message.innerHTML = 'That is a clear no.'
    } else if (random === 9) {
        message.innerHTML = 'Happiness does not require you to do so.'
    } else if (random === 10) {
        message.innerHTML = 'Pray.'
    } else {
        message.innerHTML = 'Jesus is the answer.'
    }
};

element.onclick = getMessage


