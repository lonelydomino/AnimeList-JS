class Anime {
    static all = []

    constructor({name, desc, image, ep_count, list_id}) {
        this.name = name
        this.ep_count = ep_count
        this.image = image
        this.desc = desc
        this.list_id = list_id
        Anime.all.push(this)
    }

    static findOrCreateBy(animeObj) {
        return this.findByName(animeObj.name) || new Anime(animeObj)
    }

    static findByName(name) {
        let item = Anime.all.find(element => name == element.name)
        return item
    }

    static findById(id) {
        return this.all.find(anime => anime.id === id)
    }
    static renderListAnimes = (id) => {
        ListApi.currentListAnimes(id).forEach(anime => {
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
            <div class="col col-4">Delete</div>
        `
        document.querySelector(".responsive-table").appendChild(li)
    }

}