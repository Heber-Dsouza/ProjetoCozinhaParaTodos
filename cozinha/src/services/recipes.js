import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const createRecipe = (body, clear, setSuccess, setError) => {
  axios
    .post(`${BASE_URL}/recipe`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res) => {
      setSuccess(res.data.message)
      setError("")
      clear()
    })
    .catch((err) => {
      setError(err.response.message)

    })
}