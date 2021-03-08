// adding new chat documents
// setting up a real-time listerner to get new chats
// updating the username
// updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
    this.unsub;
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
    this.unsub = this.chats
      // allows me to get documents from a certain collection when a certain condition is true eg only listen for changes to documents where the room is equal to whatever room we pass in when creating a "new Chatroom" instance
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            // update the ui
            callback(change.doc.data());
          }
        });
      });
  }

  updateName(username) {
    this.username = username;
  }

  // updating the room property and unsubscribing from chages to the old room
  updateRoom(room) {
    this.room = room;
    console.log("room updated");
    if (this.unsub) {
      this.unsub();
    }
  }
}

// step 1: create a class
// step 2: create a new "Chatroom"
// step 3: create an async method to add new chat documents
// step 4: set up a real-time listener
// step 5: only listen for document changes unique to that specific room
// step 6: update the username
// step 7: update the chatroom when a button is pressed
// step 8: unsubscribe from initial room instance changes
// step 9: take data from chatroom class and pass it to chatUI
