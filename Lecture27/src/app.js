import './styles.css';

import $ from 'jquery';
import Chat from './Chat';

const talk = new Chat({
    onMessage: addLog,
});

const $log = $('#container');
const $messageInput = $('#message');
const $authorInput = $('#name');

$('#form').on('submit', (e) => {
    e.preventDefault()
    sendMessage();
});

talk.initConnection();

function addLog({ payload }) {
    const $message = $(`<div>${payload.username}: ${payload.message}</div>`);
    $log.append($message);
    setTimeout(() => {
        $message.addClass('message');
    });
}

function sendMessage() {
    talk.send($authorInput.val(), $messageInput.val());
    $messageInput.val('');
}
// const SOCKET_URL = 'wss://fep-app.herokuapp.com/'


// let socket
// const sendBtn = document.getElementById('sendBtn')
// const nameEl = document.getElementById('name')
// const userMessage = document.getElementById('message')
// const containerEl = document.getElementById('container')
// sendBtn.addEventListener('click', sendMessage)

// initConnection()

// function initConnection() {
//     socket = new WebSocket(SOCKET_URL)

//     socket.onopen = () => {
//         console.log('hellllloooo')
//     }
//     socket.onmessage = onMessage;

//     socket.onerror = () => {
//         initConnection()
//     }
//     socket.onclose = () => {
//         initConnection()
//     }

// }

// function onMessage({ data }) {
//     const { payload: { author, message } } = JSON.parse(data)
//     containerEl.insertAdjacentHTML('beforeend', `<div>${author}: ${message}</div>`)
// }

// function sendMessage() {
//     const mes = {
//         action: 'message',
//         payload: {
//             author: nameEl.value,
//             message: userMessage.value
//         }
//     }
//     socket.send(JSON.stringify(mes))

//     clearMessage()
// }

// function clearMessage() {
//     userMessage.value = ''
// }