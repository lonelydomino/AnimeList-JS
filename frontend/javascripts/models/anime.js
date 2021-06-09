class Anime {
    static all = []

    constructor({id, name, desc, image, list_id}) {
        debugger
        this.name = name
        this.image = image
        this.desc = desc
        this.id = id
        this.list_id = list_id
        Anime.all.push(this)
    }

    static findByName(name) {
        return this.all.find(function(anime) { anime.name === name})
    }

    static findById(id) {
        return this.all.find(anime => anime.id === id)
    }

}