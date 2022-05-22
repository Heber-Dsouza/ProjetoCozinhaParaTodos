import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToRecipeListPage } from "../routes/coordinator"

export const Login = (body, clear, setError, navigate, setRightButton) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      setError("")
      goToRecipeListPage(navigate)
      setRightButton("Logout")
    })
    .catch((err) => {
      setError(err.response.data.message)
    })
}

export const Signup = (body, clear, clearConfim, setError, navigate, setRightButton) => {
  axios
  .post(`${BASE_URL}/user/signup`, body)
  .then((res) => {
    localStorage.setItem("token", res.data.token)
    clear()
    clearConfim()
    setError("")
    goToRecipeListPage(navigate)
    setRightButton("Logout")
  })
  .catch((err) => {
    setError(err.response.data.message)
  })
}

