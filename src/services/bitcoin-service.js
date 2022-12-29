import axios from "axios"

export const bitcoinService = {
    getRate,
    getData

}


const STORAGE_KEY = 'coinsDB'

// const gCoins = loadFromStorage(STORAGE_KEY) || {}


function getRate(value) {
    const api = `https://blockchain.info/tobtc?currency=USD&value=${value}`
    return axios.get(api)
        .then(res => res.data)
}

function getData() {

    const api = `https://api.blockchain.info/charts/trade-volume?timespan=1months&format=json&cors=true#`
    return axios.get(api)
        .then(res => {
            
            return res.data.values.map(item => item.y)
        })
}

// function getRate(value) {
//     if (gCoins[value]) {
//         console.log('videos from storage');
//         return Promise.resolve(gCoins[value])
//     }
//     console.log('Coins from server')
//     const api = `https://blockchain.info/tobtc?currency=USD&value=1`
//     return axios.get(api)
//         .then(res => {
//             const items = res.data.items.map(item => createFilter(item))
//             gCoins[value] = items
//             saveToStorage(STORAGE_KEY, gCoins)
//             return Promise.resolve(gCoins[value])
//         })
// }


function createFilter(val) {
    console.log(val);
    return {
        id: val.id.videoId,
        img: val.snippet.thumbnails.default.url,
        title: val.snippet.description
    }
}