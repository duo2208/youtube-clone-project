import axios from 'axios';

export default class youtubeClient {
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3',
            parmas: {key: process.env.REACT_APP_YOUTUBE_API_KEY}
        })
    }

    async search(params) {
        return this.httpClient.get('search', params)
    }
    async videos(params) {
        return this.httpClient.get('videos', params)
    }
}

