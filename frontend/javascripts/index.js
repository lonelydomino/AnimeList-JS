const listsButton = () => document.querySelector("#lists-button")
const homeButton = () => document.querySelector("#home-button")

const showLists = () => {
    contentDiv().innerHTML = `
        <header id="1"><br><br>
            <h1 id="h1lists">My lists</h1><br><br>
        </header>
        <section id="list-list">
        </section>
        <br><br><br><br>
        <div id="container">
            <a id="button-anchor" href="/lists/new">
                <div class="button1" id="button-3">
                    <div id="circle"></div>
                    <p id="button-text"> Create List</p>
                </div>
            </a>
        </div>
        `
}

const showHome = () => {
    contentDiv().innerHTML = `<img id="logo" src="./assets/animelistlogo6.png">`
}
listsButton().addEventListener("click", showLists)
homeButton().addEventListener("click", showHome)

