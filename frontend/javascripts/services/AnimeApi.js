class AnimeApi {

    static handleAddSuccess = () => {
        flash().innerText = "Added to list!"
        flash().classList.remove("hide")
        flash().classList.add("flash-success")
        setTimeout(() => {
            flash().innerText = ""
            flash().classList.remove("flash-success")
            flash().classList.add("hide")
        }, 3000)
    } 

    static addToList = (animeObj) => {
        return function(){
            ListApi.current_list_id = parseInt(event.target.value)
            
        const data = {
            name: animeObj["canonicalTitle"],
            desc: animeObj["description"],
            image: animeObj["posterImage"]["small"],
            api_id: event.target.dataset.animeApiId,
            list_id: event.target.value,
            ep_count: animeObj["episodeCount"]
        }
        fetch("http://localhost:3000/animes", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
         })
        .then(() => AnimeApi.handleAddSuccess())
    }
    }

static fetchAnimes(list_id) {
    fetch(`http://localhost:3000/lists/${list_id}`)
       .then(resp => resp.json())
       .then(json => {
           json.animes.forEach(element => {
               
               const data = {
                id: element.id,
                name: element.name,
                desc: element.desc,
                ep_count: element.ep_count,
                image: element.image,
                api_id: element.api_id,
                list_id: list_id
            }
            Anime.findOrCreateBy(data)
           });
        })
       
}


    static createAnimeTable(listName) {
        document.querySelector("aside").innerHTML = ""
        let table = `
            <div id="anime-list-close-button" onclick="AnimeApi.closeAnimeTable()">X</div>

            <h2 id="anime-table-name">${listName}</h2>
            <ul class="responsive-table" style="left: 8%;width: 90%;position: absolute;">
                  <li class="table-header">
                    <div class="col col-1"></div>
                    <div class="col col-2">Anime Name</div>
                    <div class="col col-3">Episodes</div>
                    <div class="col col-4"></div>
                  </li>

            </ul>
            `
      document.querySelector("aside").innerHTML += table
    }
    static closeAnimeTable(){
        ListApi.fetchLists()
        document.querySelector("#animes-window").className = "close"
    }
    static handleDelete = (e) => {
        return fetch(`http://localhost:3000/animes/${e.target.dataset.animeId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(resp => {
            e.target.parentElement.remove()
            let anime = Anime.findById(parseInt(e.target.dataset.animeId))
            let index = Anime.all.indexOf(anime)
            Anime.all.splice(index, 1)
        }
        )
    }
}