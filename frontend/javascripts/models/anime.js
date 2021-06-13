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
            <div class="col col-4" onclick="Anime.handleDelete(event)" data-anime-id="${this.id}" style="cursor: pointer;">Delete</div>
        `
        document.querySelector(".responsive-table").appendChild(li)
    }
    static handleDelete = (e) => {
        // debugger
        fetch(`http://localhost:3000/animes/${e.target.dataset.animeId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(resp => {
            e.target.parentElement.remove()
            let anime = Anime.findById(parseInt(e.target.dataset.animeId))
            let index = Anime.all.indexOf(anime)
            debugger
            Anime.all.splice(index, 1)
        }
        )
    }
    

}