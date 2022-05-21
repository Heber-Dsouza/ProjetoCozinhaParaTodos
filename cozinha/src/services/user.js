import axios from "axios"
import { BASE_URL } from "../constants/urls"


export const login = (body, clear, setError) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      setError("")
    })
    .catch((err) => {
      setError(err.response.data.message)
    })
}

