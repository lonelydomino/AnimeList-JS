
const fetchAnimeCollection = (query) => {
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${query}`)
    .then(resp => resp.json())
    .then(json => json.data.map((animeObj) => animeObj))   
    .then(animeData => renderResults(animeData))
}
const fetchAnime = (e) => {
    let animeID = e.target.dataset.id
    fetch(`https://kitsu.io/api/edge/anime/${animeID}`)
    .then(resp => resp.json())
    .then(animeData => renderAnimePage(animeData["data"]))
}
const addToList = () => {
    alert(" selected");
   
}
const renderAnimePage = (animeObj) => {
    document.getElementById("myOverlay").style.display = "block";
    let overlayContent = document.querySelector(".overlay-content")
    overlayContent.innerHTML = ""
    let animeDetails = animeObj["attributes"]
    let newDiv = document.createElement("div")
    newDiv.innerHTML = (`
      <img class="overlay-img" src="${animeDetails["posterImage"]["small"]}" alt="${animeDetails["canonicalTitle"]}_image">
      <h2>${animeDetails["canonicalTitle"]}</h2>
      <p> Description: ${animeDetails["description"]} </p>
    `)
    if(UserApi.current_user_id != ""){
      let select = document.createElement("select")
      select.className = "box"
      select.id = "list-select-box"
      select.onchange = addToList
      let defaultOption = document.createElement("option")
      defaultOption.innerHTML = `<option value="none" selected disabled hidden>Add to list</option>`
      newDiv.append(select)
      select.appendChild(defaultOption)
      ListApi.currentUserLists().forEach(element => {
        let option = document.createElement("option")
        option.value = element.id
        option.innerHTML = element.name
        debugger
        select.appendChild(option)
      });
       
      
        
    }
    overlayContent.appendChild(newDiv)
}



function closeAnimePage() {
  document.getElementById("myOverlay").style.display = "none";
}

handleSearch = (e) => {
    e.preventDefault()
    const searchQuery = () => document.querySelector("#search-query")
    fetchAnimeCollection(searchQuery().value)
    //have this convert spaces in the string for the search
}

showSearch = () => {
    contentDiv().innerHTML = `
    <div id="cover">
    <form id="search-form">
      <div class="tb">
        <div class="td"><input id="search-query" type="text" autocomplete="off" name="search[query]" placeholder="Search" required></div>
        <div class="td" id="s-cover">
          <button id="search-butt" type="submit">
            <div id="s-circle"></div>
            <span></span>
          </button>
        </div>
      </div>
    </form>
  </div>
`
searchForm().addEventListener("submit", handleSearch)
}

searchButton().addEventListener("click", showSearch)

const renderAnimeDetails = (e) => {
    fetchAnime(e.target.dataset.id)
}  

function renderResults(obj) {
    if(obj.length > 0) {
        let ul = document.createElement("ul")
        ul.className = "tilesWrap"
        contentDiv().appendChild(ul)
        for(let i = 0; i < obj.length; ++i){
            let data = obj[i]["attributes"]
            let li = document.createElement("li");
            let animeID = obj[i].id
            li.innerHTML = `
                        <img class="a-img" src="${data["posterImage"]["small"]}" alt="${data["canonicalTitle"]}_image">
                        <br><br><br> 
                        <h2>${data["canonicalTitle"]}  </h2>
                        <h3>${data["canonicalTitle"]}   </h3>
                        <p>
                            Rating: ${data["averageRating"]} / 100 <br>
                            Episode count: ${data["episodeCount"]}  
                        </p> 
                        <a id="results_anchor"  href="#"><button data-id="${animeID}">Details</button> </a>
                    `
                    
            ul.appendChild(li)
            document.querySelector(`button[data-id='${animeID}']`).addEventListener("click", fetchAnime)
        }
	} else {
        //whats going on with research?
        contentDiv().innerHTML += `<br><br><div id="no-results">  No results found! </div>
        </br>`
    }   1
}

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}
function enableScroll() {
  window.onscroll = function() {};
}