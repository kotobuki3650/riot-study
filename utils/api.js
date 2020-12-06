import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const searchGifs = (query) => {
  const key = process.env.API_KEY
  const baseUrl = "https://api.giphy.com/v1/gifs/search"
  const limit = 25
  const reqUrl = `${baseUrl}?api_key=${key}&q=${query}&limit=${limit}rating=G`

  return axios
    .get(reqUrl)
    .then(({ data: res }) => {
      return res.data
    })
}

export default searchGifs
