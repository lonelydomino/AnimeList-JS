const homeButton = () => document.querySelector("#home-button")

const showLists = () => {
    
    document.querySelector("#myNav").innerHTML = `
      <a href="javascript:void(0)" class="closebtn" onclick="closeLists()">&times;</a>
      <div class="lists-overlay-content">
        <div class="list-window">
          <table class="styled-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
              <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Action</td>
                <td>action animes</td>
                <td> X</td>
            </tr>
          <tr>
                <td>Demon Animes</td>
                <td>like inuyasha</td>
                <td> X</td>
            </tr>
          <tr>
                <td>Cool stuff</td>
                <td>my faves</td>
            <td> X</td>
            </tr>
            <tr class="active-row">
                <td>Romance </td>
                <td>cute stuff</td>
                <td> X</td>
            </tr>
            <!-- and so on... -->
        </tbody>
    </table>
          <button>Create new list</button>
        </div>
      </div>
        `
}

const showHome = () => {
    contentDiv().innerHTML = `<img id="logo" src="./assets/animelistlogo6.png">`
}
// listsButton().addEventListener("click", showLists)
homeButton().addEventListener("click", showHome)

/* Open when someone clicks on the span element */
/* Open when someone clicks on the span element */
function openLists() {
    document.getElementById("myNav").style.width = "100%";
    showLists()
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeLists() {
    document.getElementById("myNav").style.width = "0%";
  } 