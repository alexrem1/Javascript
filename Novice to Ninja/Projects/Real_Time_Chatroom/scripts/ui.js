// render chat templates to the DOM
// clear the list chats (when the room changes)

class ChatUI {
  constructor(list) {
    this.list = list;
  }

  // html snippet/template
  render(data) {
    const html = `
    <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${data.created_at.toDate()}</div>
    </li>
    `;
    this.list.innerHTML += html;
  }
}
