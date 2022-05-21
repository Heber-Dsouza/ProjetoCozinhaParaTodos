import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToRecipeListPage } from "../routes/coordinator"


export const login = (body, clear, setError, navigate) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      setError("")
      goToRecipeListPage(navigate)
    })
    .catch((err) => {
      setError(err.response.data.message)
    })
}

