const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");
let addDiv = document.getElementById("add-div");
let recipeDiv = document.getElementById("recipe-container");
let recipes = [];

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("recipes") );

if (leadsFromLocalStorage) {
    recipes = leadsFromLocalStorage;
}
render();


addBtn.addEventListener("click", function(){
  addDiv.innerHTML = `
  <form>
   <label for="name">Recipe Name</label><br>
   <input type="text" id="name" name="name" autocomplete="off" ><br>
   <label for="url" >URL</label><br>
   <input type="text" id="url" name="url" autocomplete="off"><br><br>
   <label for="note" >Notes</label><br>
   <input type="text" id="notes" name="notes" autocomplete="off"><br><br>
   <button  id="save-btn" style = "background-color: white;  border: unset;">Save</button>
   </form> `
    let saveBtn = document.getElementById("save-btn");
    let name = document.getElementById("name");
    let url = document.getElementById("url");
    let notes = document.getElementById("notes");
    saveBtn.addEventListener("click", function(){
        addRecipe(name, url, notes);
    })
});

deleteBtn.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})

function render(){
    for(let i=0; i<recipes.length; i++){
        if(recipes[i].notes == undefined){
            recipes[i].notes="";
        }
        recipeDiv.innerHTML += `
        <div class="card">
         <div class="container">
          <h4><b>${recipes[i].name}</b></h4>
          <a target="_blank" href="${recipes[i].url}">Open URL</a>
          <p>${recipes[i].notes}<p/>
         </div>
        </div>
        ` 
    }
}

function addRecipe(name, url, notes){
  let newRecipeObject = {name: name.value, url: url.value, notes:notes.value};
  console.log(newRecipeObject);

  if(newRecipeObject.name == "" && newRecipeObject.url=="" ){
    addDiv.innerHTML +=`
    <div class="alert alert-warning">
      <strong>Warning!</strong> You have to enter a name or url
    </div>
    `
  }else{
     recipes.push(newRecipeObject);
     localStorage.setItem("recipes", JSON.stringify(recipes) ); 
  }
}
