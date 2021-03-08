// This is where we're going to start to initialize our application.

// DOM queries
const chatList = document.querySelector(".chat-list");

// class instance
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", "shaun");

// ultimately we want to be able to render the chat data to the DOM and to do that we'll create a another class called Chat UI inside the UI.js
chatroom.getChats((data) => chatUI.render(data));

//First of all we make a chat room instance and set that with this room and this author then we go and get the chats based on this room.
// So we're listening for changes to those, they come back and fire this callback function for every chat we get.
// And we pass in that individual chat which we call data into the render method of this chat UI class.
// In UI.JS we call up random method passing the data which is the single chat, we make this template and then we add it to the DOM right here to this list "this.list = list" which is linked to the chatList constant
