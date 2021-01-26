let messages = ['Outlook not so good.', 'Try again.', 'The answer is uncertain.', 'Tread carefully.',
    'The time is now.', 'There is no time like the present.', 'Look inward for the answer.',
    'Seek advice from a close friend.', 'That is a clear no.', 'Happiness does not require you to do so.',
    'Pray.', 'Jesus is the answer.', 'You must wait longer.']

let button = document.getElementById('button');
let message = document.getElementById('message');

function messageSelector() {
    let random = Math.floor(Math.random() * messages.length);
    return messages[random];
}

function getMessage() {
    message.innerHTML = messageSelector();
}

button.addEventListener('click', getMessage);