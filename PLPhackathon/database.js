
// Initialize our simple database in localStorage if it doesn't exist
if (!localStorage.getItem('contactMessages')) {
    localStorage.setItem('contactMessages', JSON.stringify([]));
  }
  
  // Function to save contact form messages
  function saveContactMessage(name, email, message) {
    // Get existing messages
    const messages = JSON.parse(localStorage.getItem('contactMessages'));
    
    // Add new message with timestamp
    const newMessage = {
      id: Date.now(),
      name: name,
      email: email,
      message: message,
      date: new Date().toISOString()
  };
  
  // Save to our "database"
  messages.push(newMessage);
  localStorage.setItem('contactMessages', JSON.stringify(messages));
  
  console.log('Message saved:', newMessage);
  return newMessage;
}

// Function to get all messages
function getAllMessages() {
  return JSON.parse(localStorage.getItem('contactMessages'));
}

// Function to clear all messages (for testing)
function clearAllMessages() {
  localStorage.setItem('contactMessages', JSON.stringify([]));
  console.log('All messages cleared');
}

// Uncomment to see all messages in console
// console.log('All messages:', getAllMessages());

