import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToRecipeListPage } from '../routes/coordinator'

const useUnprotectedPage = () => {
  const navigate = useNavigate()
  useLayoutEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      goToRecipeListPage(navigate)
    }
  }, [navigate])
}

export default useUnprotectedPage