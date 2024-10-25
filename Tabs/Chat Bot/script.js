function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

function sendMessage() {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    
    const message = userInput.value;
    if (message.trim() === '') return;

    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerHTML = <div>${message}</div><div class="timestamp">${getCurrentTime()}</div>;
    chatBox.appendChild(userMessage);

    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to the bottom

    // Simulate a response from ChatGPT
    setTimeout(() => {
        const chatgptMessage = document.createElement('div');
        chatgptMessage.className = 'message chatgpt';
        chatgptMessage.innerHTML = <div>This is a response.</div><div class="timestamp">${getCurrentTime()}</div>;
        chatBox.appendChild(chatgptMessage);
        chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to the bottom
    }, 1000);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent the default Enter key action (like form submission)
        sendMessage();
    }
}