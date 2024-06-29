/// script.js
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    displayMessage(userInput, 'user-message', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHtqsQizwi4syQ1AyhMVid6SO78Nfdd-meQ&s'); // Add user icon
    document.getElementById('user-input').value = '';

    const botResponse = getBotResponse(userInput);
    setTimeout(() => displayMessage(botResponse.message, botResponse.className, 'https://cdn-icons-png.flaticon.com/512/1698/1698535.png'), 500); // Add bot icon
}

function displayMessage(message, className, iconSrc) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;

    const iconElement = document.createElement('img');
    iconElement.src = iconSrc;

    messageElement.appendChild(iconElement);
    const textElement = document.createElement('span');
    textElement.innerText = message;
    messageElement.appendChild(textElement);

    document.getElementById('chat-log').appendChild(messageElement);
    messageElement.scrollIntoView();
}

function getBotResponse(input) {
    input = input.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi')) {
        return { message: 'Hello! Welcome to our restaurant. How can I help you today?', className: 'bot-message' };
    } else if (input.includes('menu')) {
        return { message: `Our menu includes:
        - Pizza: $12 (Small), $15 (Medium), $18 (Large)
        - Pasta: $10
        - Burger: $8
        - Salad: $7
        -mixed icecream Dessert: $5
        What would you like to order?`, className: 'bot-message' };
    } else if (input.includes('hours') || input.includes('open')) {
        return { message: 'We are open from 10 AM to 10 PM every day.', className: 'bot-message' };
    } else if (input.includes('order')) {
        return { message: 'Please specify the size if you are ordering a pizza. What would you like to order?', className: 'bot-message' };
    } else if (input.includes('pizza')) {
        if (input.includes('small')) {
            return { message: 'You have ordered a small pizza for $12.Thank you for ordering', className: 'bot-message' };
        } else if (input.includes('medium')) {
            return { message: 'You have ordered a medium pizza for $15.Thank you for ordering', className: 'bot-message' };
        } else if (input.includes('large')) {
            return { message: 'You have ordered a large pizza for $18.Thank you for ordering', className: 'bot-message' };
        } else {
            return { message: 'Please specify the size: Small ($12), Medium ($15), or Large ($18).', className: 'bot-message' };
        }
    } else if (input.includes('pasta')) {
        return { message: 'Your order for Pasta is confirmed!', className: 'bot-message' };
    } else if (input.includes('burger')) {
        return { message: 'Your order for Burger is confirmed!', className: 'bot-message' };
    } else if (input.includes('salad')) {
        return { message: 'Your order for Salad is confirmed!', className: 'bot-message' };
    } else if (input.includes('mixed icecream dessert')) {
        return { message: 'Your order for Dessert is confirmed!', className: 'bot-message' };
    } else if (input.includes('bye')||(input.includes('thank you'))) {
        return { message: 'Goodbye! Have a great day!', className: 'bot-message' };
    } else {
        return { message: 'Sorry, I did not understand that. Can you please rephrase?', className: 'bot-message' };
    }
}
