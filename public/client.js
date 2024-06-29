const socket = io();

document.getElementById('join-room-btn').addEventListener('click', () => {
    const room = document.getElementById('room-input').value;
    if (room) {
        socket.emit('joinRoom', room);
        document.getElementById('chat-room').classList.add('hidden');
        document.getElementById('chat-window').classList.remove('hidden');
    }
});

document.getElementById('send-message-btn').addEventListener('click', () => {
    const msg = document.getElementById('message-input').value;
    if (msg) {
        socket.emit('chatMessage', msg);
        document.getElementById('message-input').value = '';
    }
});

socket.on('chatMessage', (msg) => {
    const messages = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;
});