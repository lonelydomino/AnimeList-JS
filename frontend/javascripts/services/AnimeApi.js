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


    static createAnimeTable(listName) {
        let table = `
            <div class="outer-close">
                <a class="close"><span></span></a>
            </div>

            <h2 id="anime-table-name">${listName}</h2>
            <ul class="responsive-table" style="
            left: 8%;
            width: 90%;
            position: absolute;
        ">
                  <li class="table-header">
                    <div class="col col-1">Job Id</div>
                    <div class="col col-2">Customer Name</div>
                    <div class="col col-3">Amount Due</div>
                    <div class="col col-4">Payment Status</div>
                  </li>
                  <li class="table-row">
                    <div class="col col-1" data-label="Job Id">42235</div>
                    <div class="col col-2" data-label="Customer Name">John Doe</div>
                    <div class="col col-3" data-label="Amount">$350</div>
                    <div class="col col-4" data-label="Payment Status">Pending</div>
                  </li>
                  <li class="table-row">
                    <div class="col col-1" data-label="Job Id">42442</div>
                    <div class="col col-2" data-label="Customer Name">Jennifer Smith</div>
                    <div class="col col-3" data-label="Amount">$220</div>
                    <div class="col col-4" data-label="Payment Status">Pending</div>
                  </li>
                  <li class="table-row">
                    <div class="col col-1" data-label="Job Id">42257</div>
                    <div class="col col-2" data-label="Customer Name">John Smith</div>
                    <div class="col col-3" data-label="Amount">$341</div>
                    <div class="col col-4" data-label="Payment Status">Pending</div>
                  </li>
                  <li class="table-row">
                    <div class="col col-1" data-label="Job Id">42311</div>
                    <div class="col col-2" data-label="Customer Name">John Carpenter</div>
                    <div class="col col-3" data-label="Amount">$115</div>
                    <div class="col col-4" data-label="Payment Status">Pending</div>
                  </li>
                </ul>
            `
      document.querySelector("aside").innerHTML += table
    }
}

//fix display on list anime page!!!!!