// This is where we're going to start to initialize our application.

// DOM queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");

// add a new chat
newChatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const message = newChatForm.message.value.trim(); // message value
  // add a message
  chatroom
    .addChat(message)
    .then(() => newChatForm.reset())
    .catch((err) => console.log(err)); // does not matter class instance is below because by the time a user actually submits a form eg type something into the field and submits it all of the javascript has already run. So chat room already exists at this point.
});

// class instance
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", "shaun");

// ultimately we want to be able to render the chat data to the DOM and to do that we'll create a another class called Chat UI inside the UI.js
chatroom.getChats((data) => chatUI.render(data));
