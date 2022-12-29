export const contactService = {
    getContacts,
    getContactById,
    deleteContact,
    saveContact,
    getEmptyContact
}



const contacts = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "img": "https://res.cloudinary.com/dirvusyaz/image/upload/v1670857382/channels4_profile_x2mqfd.jpg"
    },
    {
        "_id": "5a5664025f6ae9aa24a99fde",
        "name": "Hallie Mclean",
        "email": "halliemclean@renovize.com",
        "phone": "+1 (948) 464-2888",
        "img": "https://res.cloudinary.com/dirvusyaz/image/upload/v1670857365/Dovi_franses_autoOrient_i_zaj4g4.jpg"
    },
    {
        "_id": "5a56640252d6acddd183d319",
        "name": "Parsons Norris",
        "email": "parsonsnorris@renovize.com",
        "phone": "+1 (958) 502-3495",
        "img": "https://res.cloudinary.com/dirvusyaz/image/upload/v1670773559/download_g8sxbx.jpg"
    },
    {
        "_id": "5a566402ed1cf349f0b47b4d",
        "name": "Rachel Lowe",
        "email": "rachellowe@renovize.com",
        "phone": "+1 (911) 475-2312",
        "img": "https://res.cloudinary.com/dirvusyaz/image/upload/v1670745771/MV5BNjRlMmUyNmEtNzU2NC00NTE0LWJlNWEtYWVlZDAwN2Q0ZDBmXkEyXkFqcGdeQXVyMTE0NzUxMjk5._V1__zhyvju.jpg"
    },
    {
        "_id": "5a566402abce24c6bfe4699d",
        "name": "Dominique Soto",
        "email": "dominiquesoto@renovize.com",
        "phone": "+1 (807) 551-3258",
        "img": "https://res.cloudinary.com/dirvusyaz/image/upload/v1670419617/Gigi-Hadid-ujawnila-imie-swojej-coki.-Zrobila-to-w-nietypowy-sposob_article_gybjfe.jpg"
    },
    {
        "_id": "5a566402a6499c1d4da9220a",
        "name": "Shana Pope",
        "email": "shanapope@renovize.com",
        "phone": "+1 (970) 527-3082",
        "img": "https://res.cloudinary.com/dirvusyaz/image/upload/v1670419391/65b33e0e-4ac6-43c9-b226-ce2cb5799465_gd6sox.webp"
    },
    {
        "_id": "5a566402f90ae30e97f990db",
        "name": "Faulkner Flores",
        "email": "faulknerflores@renovize.com",
        "phone": "+1 (952) 501-2678",
        "img": "https://res.cloudinary.com/dirvusyaz/image/upload/v1670347537/774254_c4xplt.webp"
    },
    {
        "_id": "5a5664027bae84ef280ffbdf",
        "name": "Holder Bean",
        "email": "holderbean@renovize.com",
        "phone": "+1 (989) 503-2663",
        "img": "https://res.cloudinary.com/dirvusyaz/image/upload/v1670347490/eretz18_03_05_katorza_autoOrient_i_rfxsd8.jpg"
    },
    {
        "_id": "5a566402e3b846c5f6aec652",
        "name": "Rosanne Shelton",
        "email": "rosanneshelton@renovize.com",
        "phone": "+1 (968) 454-3851",
        "img": "https://res.cloudinary.com/dirvusyaz/image/upload/v1670347076/IMG_4390_b_xoeknw.jpg"
    },
    {
        "_id": "5a56640272c7dcdf59c3d411",
        "name": "Pamela Nolan",
        "email": "pamelanolan@renovize.com",
        "phone": "+1 (986) 545-2166",
        "img": "https://res.cloudinary.com/dirvusyaz/image/upload/v1670346838/s07_s5ixyp.jpg"
    },
    {
        "_id": "5a5664029a8dd82a6178b15f",
        "name": "Roy Cantu",
        "email": "roycantu@renovize.com",
        "phone": "+1 (929) 571-2295",
        "img": "https://res.cloudinary.com/dirvusyaz/image/upload/v1670346837/images_rykvkw.jpg"
    },
    {
        "_id": "5a5664028c096d08eeb13a8a",
        "name": "Ollie Christian",
        "email": "olliechristian@renovize.com",
        "phone": "+1 (977) 419-3550",
        "img": "https://res.cloudinary.com/dirvusyaz/image/upload/v1670346773/s10_zee0yi.jpg"
    },
    {
        "_id": "5a5664026c53582bb9ebe9d1",
        "name": "Nguyen Walls",
        "email": "nguyenwalls@renovize.com",
        "phone": "+1 (963) 471-3181",
        "img": "https://res.cloudinary.com/dirvusyaz/image/upload/v1670346744/team_eretzbnt_c_ceatwg.jpg"
    },
    
];

function sort(arr) {
    return arr.sort((a, b) => {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
        }
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
        }

        return 0;
    })
}

function getContacts(filterBy = null) {
    return new Promise((resolve, reject) => {
        var contactsToReturn = contacts;
        if (filterBy && filterBy.name) {
            contactsToReturn = filter(filterBy.name)
        }
        resolve(sort(contactsToReturn))
    })
}

function getContactById(id) {
    return new Promise((resolve, reject) => {
        const contact = contacts.find(contact => contact._id === id)
        contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
    })
}

function deleteContact(id) {
    return new Promise((resolve, reject) => {
        const index = contacts.findIndex(contact => contact._id === id)
        if (index !== -1) {
            contacts.splice(index, 1)
        }

        resolve(contacts)
    })
}

function _updateContact(contact) {
    return new Promise((resolve, reject) => {
        const index = contacts.findIndex(c => contact._id === c._id)
        if (index !== -1) {
            contacts[index] = contact
        }
        resolve(contact)
    })
}

function _addContact(contact) {
    return new Promise((resolve, reject) => {
        contact._id = _makeId()
        contacts.push(contact)
        resolve(contact)
    })
}

function saveContact(contact) {
    return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: ''
    }
}

function filter(name) {
    name = name.toLocaleLowerCase()
    return contacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(name) ||
            contact.phone.toLocaleLowerCase().includes(name) ||
            contact.email.toLocaleLowerCase().includes(name)
    })
}



function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}