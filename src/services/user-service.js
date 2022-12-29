

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser';

export const userService = {
    getUser,
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
}

const users = [
    {
        name: "Ochoa Hyde",
        coins: 100,
        moves: []
    }
]


function getUser() {
    return users
}

async function login(userCred) {
    const user = users.find(({ name }) => name === userCred.name);
    if (user) return saveLocalUser(user);
}

async function signup(user) {
    const addedUser = await _addUser(user);
    return saveLocalUser(addedUser);
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
    return user;
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER));
}

function _addUser(user) {
    user._id = _makeId();
    user.coins = 100;
    user.moves = [];
    users.push(user);
    return Promise.resolve(user);
}



export function _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}