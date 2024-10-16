// DOM Elements
const authForm = document.getElementById('authForm');
const chatContainer = document.getElementById('chatContainer');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const sendBtn = document.getElementById('sendBtn');
const usernameInput = document.getElementById('username');
const displayName = document.getElementById('displayName');
const messageInput = document.getElementById('messageInput');
const chatBox = document.getElementById('chatBox');

// User data
let currentUser = localStorage.getItem('username');
let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];

// Load Chat History
function loadChatHistory() {
    chatBox.innerHTML = '';
    chatHistory.forEach(chat => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        if (chat.user === currentUser) {
            messageDiv.classList.add('sent');
        }
        messageDiv.textContent = `${chat.user}: ${chat.message}`;
        chatBox.appendChild(messageDiv);
    });
}

// Login Functionality
loginBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem('username', username);
        currentUser = username;
        displayName.textContent = currentUser;
        authForm.style.display = 'none';
        chatContainer.style.display = 'block';
        loadChatHistory();
    } else {
        alert('Please enter a username');
    }
});

// Logout Functionality
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    currentUser = null;
    authForm.style.display = 'block';
    chatContainer.style.display = 'none';
    usernameInput.value = '';
});

// Send Message Functionality
sendBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        // Add message to chat history
        const newMessage = { user: currentUser, message };
        chatHistory.push(newMessage);
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));

        // Display the message
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'sent');
        messageDiv.textContent = `${currentUser}: ${message}`;
        chatBox.appendChild(messageDiv);

        // Clear input field
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

// Check if user is already logged in
if (currentUser) {
    displayName.textContent = currentUser;
    authForm.style.display = 'none';
    chatContainer.style.display = 'block';
    loadChatHistory();
}
