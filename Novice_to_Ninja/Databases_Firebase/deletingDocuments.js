const list = document.querySelector("ul");
const form = document.querySelector("form");

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;
  list.innerHTML += html;
};

// get documents - one time retrieval eg not REAL-TIME
db.collection("recipes")
  .get()
  .then((snapshot) => {
    // when we have the data (response)
    snapshot.docs.forEach((doc) => {
      //   console.log(doc.data());
      addRecipe(doc.data(), doc.id);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// add documents
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now), // firestore timestamp is a special object
  };

  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added");
    })
    .catch((err) => {
      console.log(err);
    });
  form.reset();
});

// deleting documents
list.addEventListener("click", (e) => {
  //   console.log(e);
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    db.collection("recipes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("recipe deleted");
      });
  }
});
