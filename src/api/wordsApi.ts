import axios from 'axios';



export const wordsApi = {
    getWords() {
        return axios.get<any>(
            'https://server-4-mrsoft.herokuapp.com/'
            // 'https://cors-anywhere.herokuapp.com/mrsoft.by/data.json'
        ).then(res => res.data.data)

    }

}