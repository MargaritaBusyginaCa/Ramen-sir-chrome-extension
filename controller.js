

function addElementToPage(){
  addDiv.innerHTML = `
  <form>
   <label for="name">Recipe Name</label><br>
   <input type="text" id="name" name="name"><br>
   <label for="url">URL</label><br>
   <input type="text" id="url" name="url"><br><br>
   <label for="note">Notes</label><br>
   <input type="text" id="notes" name="notes"><br><br>
   <button  id="save-btn" style = "background-color: white;  border: unset;">Save</button>
   </form> `
    let saveBtn = document.getElementById("save-btn");
    let name = document.getElementById("name");
    let url = document.getElementById("url");
    let notes = document.getElementById("notes");
    saveBtn.addEventListener("click", function(){
        addRecipe(name, url, notes);
    })
}