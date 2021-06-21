
const fetchAnimeCollection = (query) => {
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${query}`)
    .then(resp => resp.json())
    .then(json => json.data.map(animeObj => animeObj))   
    .then(animeData => renderResults(animeData))
}
const fetchAnime = (e) => {
    let animeID = e.target.dataset.id
    fetch(`https://kitsu.io/api/edge/anime/${animeID}`)
    .then(resp => resp.json())
    .then(animeData => renderAnimePage(animeData["data"]))
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
    let form = document.createElement("form")
    form.id = "select-form"
    let select = document.createElement("select")
    select.className = "box"
    select.id = "list-select-box"
    select.onchange = AnimeApi.addToList(animeDetails)
    select.dataset.animeApiId = animeObj.id
    let defaultOption = document.createElement("option")
    defaultOption.innerHTML = `<option value="none" selected disabled hidden>Add to list</option>`
    form.append(select)
    newDiv.append(form)
    select.appendChild(defaultOption)
    
    ListApi.currentUserLists().forEach(element => {
      let option = document.createElement("option")
      option.value = element.id
      option.innerHTML = element.name
      select.appendChild(option)
    });
  }
  overlayContent.appendChild(newDiv)
  disableScroll()
}

const closeAnimePage = () => {
  document.getElementById("myOverlay").style.display = "none";
  enableScroll()
}

const handleSearch = () => {
    event.preventDefault()
    const searchQuery = () => document.querySelector("#search-query")
    fetchAnimeCollection(searchQuery().value)
}

const renderAnimeDetails = (e) => {
    fetchAnime(e.target.dataset.id)
}  

const renderResults = (obj) => {
    if(obj.length > 0) {
      if(document.querySelector(".tilesWrap")){
        document.querySelector(".tilesWrap").remove()
      }
      let ul = document.createElement("ul")
      ul.className = "tilesWrap"
      
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
        contentDiv().appendChild(ul)
        document.querySelector(`button[data-id='${animeID}']`).addEventListener("click", fetchAnime)
        }
	} else {
        contentDiv().innerHTML += `<br><br><div id="no-results">  No results found! </div>
        </br>`
    }   
}

