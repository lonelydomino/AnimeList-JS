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
                // user_id: UserApi.current_user_id, 
                list_id: event.target.value,
            }
            //how to establish a relationship? with no ids available?
        fetch("http://localhost:3000/animes", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
         })
        .then(resp => resp.json())
        .then(json => {
            let obj = json
            obj.list_id = ListApi.current_list_id
            let anime = new Anime(obj)
            AnimeApi.handleAddSuccess()
        })
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
                    name: element.name,
                    desc: element.desc,
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



    static createAnimeTable() {
        let table = `
            <div class="outer-close">
                <a class="close"><span></span></a>
            </div>

            <h2 id="anime-table-name">List Name</h2>
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">Anime Name</div>
                    <div class="col col-4"></div>
                </li>
            </ul>
            `
      document.querySelector("aside").innerHTML += table
    }
}