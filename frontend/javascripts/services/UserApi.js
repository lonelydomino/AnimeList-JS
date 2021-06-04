class UserApi {
    static current_user_id = ""

    static fetchUser(password, username) {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(json => findUser(json, password, username))
    }

    static findUser(users, username, password) {
        users.forEach(u => {
            if(u.username === username && u.password === password){
                let session = {
                    current_user_id = user.id
                }
            }
            else {
                
            }
        });
    }


}