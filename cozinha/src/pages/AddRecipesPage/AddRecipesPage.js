import React from 'react'

import useProtectedPage from "../../hooks/useProtectedPage"
import AddRecipesForm from "./AddRecipesForm"

const AddRecipesPage = () => {

  useProtectedPage()

  return (
    <div>
      <div>
        <h1>Adicionar Nova Receita</h1>
        <AddRecipesForm />
      </div>
    </div>
  )
}

export default AddRecipesPage