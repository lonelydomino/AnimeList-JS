class Anime {
    static all = []

    constructor({name, desc, image, list_id}) {
        this.name = name
        this.image = image
        this.desc = desc
        // this.id = id
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
    
    render() {
        debugger
        let li = document.createElement("li")
        li.className = "table-row"
        li.innerHTML = `
            <div class="col col-1">${this.name}</div>
            <div class="col col-4">Delete</div>
        `
        document.querySelector(".responsive-table").appendChild(li)
    }

}