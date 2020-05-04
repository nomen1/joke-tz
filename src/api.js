import * as axios from "axios"

let instance = axios.create({
    baseURL: `https://api.chucknorris.io/jokes/`
             
})

export const jokesAPI = {
    getRandomJoke(){
        return instance.get(`random`)
    },
    getCategories(){
        return instance.get(`categories`)
    },
    getRandomFromCategory(category){
        return instance.get(`random?category=${category}`)
    },
    getFreeTextSearch(data){
        return instance.get(`search?query=${data}`)
    }
}