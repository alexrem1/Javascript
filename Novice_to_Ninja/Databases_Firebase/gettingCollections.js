const list = document.querySelector("ul");

const addRecipe = (recipe) => {
  let time = recipe.created_at.toDate();
  let html = `
        <li>
            <div>${recipe.title}</div>
            <div>${time}</div>
        </li>
    `;
  list.innerHTML += html;
};

// get documents
db.collection("recipes")
  .get()
  .then((snapshot) => {
    // when we have the data (response)
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
      addRecipe(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });
