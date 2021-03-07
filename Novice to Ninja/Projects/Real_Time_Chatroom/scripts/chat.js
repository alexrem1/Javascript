// adding new chat documents
// setting up a real-time listerner to get new chats
// updating the username
// updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
  }
  async addChat(message) {
    // format a chat object
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now), // firestore timestamp is a special object
    };

    // save the chat document
    const response = await this.chats.add(chat).then;
    return response;
  }
}

const chatroom = new Chatroom("gaming", "shaun");
chatroom
  .addChat("hello everyone")
  .then(() => console.log("chat added"))
  .catch((err) => console.log(err));

// step 1: create a class
// step 2: create a new "Chatroom"
// step 3: create an async method to add new chat documents
