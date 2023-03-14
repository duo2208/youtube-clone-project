import axios from "axios"

export default class Youtube {
    constructor(apiClient) {
        this.httpClient = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }
        })
    }

    async search(keyword) {
        // # : used to denote private class fields and methods.
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
    }

    async channelInfo(id) {
        return this.httpClient.get('channels', {
            params: {
                part: 'snippet',
                id: id
            }
        })
        .then(res => res.data.items[0].snippet);
    }

    async relatedVideos(id) {
        return this.httpClient.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                relatedToVideoId: id,
            }
        })
        .then(res => res.data.items.map((item) => ({...item, id: item.id.videoId})))     // cordinate the id format
    }

    async #searchByKeyword(keyword) {
        return this.httpClient.get('search', {
            params: {
                part: 'snippet',
                maxResults: '25',
                type: 'video',
                q: keyword
            }
        })
        .then(res => res.data.items.map((item) => ({...item, id: item.id.videoId})))     // cordinate the id format
    }

    async #mostPopular() {
        return this.httpClient.get('videos', {
            params: {
                part: 'snippet',
                maxResults: 25,
                chart: 'mostPopular',
            },
        })
        .then((res) => res.data.items);
    }
}