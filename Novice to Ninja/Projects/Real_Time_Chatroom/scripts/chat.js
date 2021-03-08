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

  // real time listener - everytime there's a snapshot, it'll fire the first callback function to check if its a added type which will invoke the callback function passing in that data which gets fired on line 41
  // calling line 41 once sets up this real time listener eg data added like new chats can be retreived and modified inside the callback function below
  getChats(callback) {
    this.chats.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          // update the ui
          callback(change.doc.data());
        }
      });
    });
  }
}

const chatroom = new Chatroom("gaming", "shaun");
chatroom.getChats((data) => {
  console.log(data);
  // call the update function on the ui class
});
// step 1: create a class
// step 2: create a new "Chatroom"
// step 3: create an async method to add new chat documents
// step 4: set up a real-time listener
