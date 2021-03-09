// This is where we're going to start to initialize our application.

// DOM queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updateMssg = document.querySelector(".update-mssg");
const rooms = document.querySelector(".chat-rooms");
const updateRoomMssg = document.querySelector(".update-room");

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

// update username
newNameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // update name via the chatroom class
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  newNameForm.reset();
  //show then hide the update message
  updateMssg.innerText = `Your name was updated to ${newName}`;
  setTimeout(() => {
    updateMssg.innerText = "";
  }, 3000);
});

// update the chat room
rooms.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute("id"));
    chatroom.getChats((chat) => chatUI.render(chat));
  }
  updateRoomMssg.innerText = `The room has been updated to ${e.target.getAttribute(
    "id"
  )}`;
  setTimeout(() => {
    updateRoomMssg.innerText = "";
  }, 1000);
});

// check local storage for a name
const username = localStorage.username ? localStorage.username : "anonymous";

// class instance
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", username);

// ultimately we want to be able to render the chat data to the DOM and to do that we'll create a another class called Chat UI inside the UI.js
chatroom.getChats((data) => chatUI.render(data));
