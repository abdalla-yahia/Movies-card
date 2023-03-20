import axios from 'axios'

const api_key = '7aa19ba2d2c107124cd6e08e71460928'
export const getAllMovies = async (lang='ar',pg='2') => {
    const result = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${lang}&page=${pg}`)
        .then(res =>res.data )
        return result;
    }

export const searchMovie = async (word,lang) => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=${lang}&query=${word}&include_adult=false`)
        .then(res => res.data)
return res
}



