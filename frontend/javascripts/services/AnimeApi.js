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
        // .then(resp => {resp.json()})
        // .then(json => {
        //     debugger
        //     let obj = json
        //     obj.list_id = ListApi.current_list_id
        //     let anime = new Anime(obj)
        //     AnimeApi.handleAddSuccess()
        // })
        // let anime = new Anime(data)
        AnimeApi.handleAddSuccess()

        // alert(`${event.target.value} selected, id is : ${event.target.dataset.animeApiId}`);
        // Anime.all << Anime.findOrCreateBy()
        //handle form??
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
        //    let obj = json
        //    obj.list_id = ListApi.current_list_id
        //    let anime = new Anime(obj)
        //    AnimeApi.handleAddSuccess()
       
}


    static createAnimeTable(listName) {
        // <div class="outer-close">
        //         <a class="close"><span></span></a>
        //     </div>
        let table = `
            <div id="anime-list-close-button">X</div>

            <h2 id="anime-table-name">${listName}</h2>
            <ul class="responsive-table" style="left: 8%;width: 90%;position: absolute;">
                  <li class="table-header">
                    <div class="col col-1">Image</div>
                    <div class="col col-2">Anime Name</div>
                    <div class="col col-3">Episodes?</div>
                    <div class="col col-4">Delete</div>
                  </li>

            </ul>
            `
      document.querySelector("aside").innerHTML += table
    }
}

//fix display on list anime page!!!!!