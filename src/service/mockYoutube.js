import axios from "axios"

// useQuery 콜백 함수
export default class MockYoutube {
    constructor() {
    }

    async search(keyword) {
        // # : used to denote private class fields and methods.
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
    }

    async channelInfo(id) {
        return axios.get('/videos/channel.json')
            .then(res => res.data.items[0].snippet)
    }

    async relatedVideos(id) {
        return axios.get('/videos/related.json')
            .then(res => res.data.items.map((item) => ({...item, id: item.id.videoId})))     // cordinate the id format
    }

    async #searchByKeyword() {
        return axios.get('/videos/search.json')
            .then(res => res.data.items.map((item) => ({...item, id: item.id.videoId})))     // cordinate the id format
    }

    async #mostPopular() {
        return axios.get('/videos/popular.json')
            .then(res => {
                console.log(res);
                return res.data.items;
            })
    }
}
