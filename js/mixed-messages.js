function getRandomInteger {
    const random = Math.floor((Math.random()*10)+1)
    if (random === 1) {
        return 'Your future looks bleak.'
    } else if (random === 2) {
        return 'Try again.'
    } else if (random === 3) {
        return 'The answer is uncertain. Tread carefully.'
    } else if (random === 4) {
        return 'The time is now.'
    } else if (random === 5) {
        return 'There is no time like the present.'
    } else if (random === 6) {
        return 'Look inward for the answer.'
    } else if (random === 7) {
        return 'Seek advice from a close friend.'
    } else if (random === 8) {
        return 'That is a clear no.'
    } else if (random === 9) {
        return 'Happiness does not require you to do so.'
    } else if (random === 10) {
        return 'Pray.'
    } else {
        return 'Jesus is the answer.'
    }
}