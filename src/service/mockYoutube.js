import axios from "axios"

// useQuery 콜백 함수
export default class MockYoutube {
    constructor() {
    }

    async search(keyword) {
        // # : used to denote private class fields and methods.
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
    }

    async #searchByKeyword() {
        return axios.get('/videos/search.json')
            .then(res => res.data.items)
            .then(items => {
                console.log(items);
                return items.map(items => ({...items, id: items.id.videoId}))   // cordinate the id format
            })
    }
    async #mostPopular() {
        return axios.get('/videos/popular.json')
            .then(res => {
                console.log(res);
                return res.data.items;
            })
    }
}
