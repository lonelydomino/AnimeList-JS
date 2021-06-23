class Anime {
    static all = []

    constructor({name, desc, image, ep_count, list_id, id}) {
        this.id = id,
        this.name = name,
        this.ep_count = ep_count
        this.image = image
        this.desc = desc
        this.list_id = list_id
        Anime.all.push(this)
    }

    static findOrCreateBy(animeObj) {
        return this.findById(animeObj.id) || new Anime(animeObj)
    }

    static findByName(name) {
        let item = Anime.all.find(element => name == element.name)
        return item
    }

    static findById(id) {
        return this.all.find(anime => anime.id === id)
    }
    static renderListAnimes = (id) => {
        let sortedList = ListApi.currentListAnimes(id).sort((element1, element2) => element1.ep_count - element2.ep_count)
        
        sortedList.forEach(anime => {
            anime.render()
        });
    }

    render() {
        let li = document.createElement("li")
        li.className = "table-row"
        li.innerHTML = `
            <div class="col col-1"><img src="${this.image}" width="50" height="60"></div>
            <div class="col col-2">${this.name}</div>
            <div class="col col-3">${this.ep_count}</div>
            <div class="col col-4" data-anime-id="${this.id}" onclick="AnimeApi.handleDelete(event)" style="color:red; cursor: pointer;">X</div>
        `
        document.querySelector(".responsive-table").appendChild(li)
        // document.querySelector(".col-4").addEventListener("click", AnimeApi.handleDelete)
    }
    
    

}