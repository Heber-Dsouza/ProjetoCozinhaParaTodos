import React, { useState } from 'react'
import useForm from "../../hooks/useForm"

import {createRecipe} from "../../services/recipes"
import { CustomFormHelperText, InputsContainer, AddRecipeFormContainer, CustomButton } from "./styled"

import { TextField } from '@mui/material';



const AddRecipesForm = () => {

  const [form, onChange, clear] = useForm({title: "", description: "", image: ""})
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  

  const onSubmitForm = (event) => {
    event.preventDefault()
    createRecipe(form, clear, setSuccess, setError)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <AddRecipeFormContainer>
        <InputsContainer>
          <TextField
            type='text'
            label="Título"
            variant="outlined"
            name={"title"}
            value={form.title}
            onChange={onChange("title")}
            required
            fullWidth
            margin='dense'
            autoFocus
          />

          <TextField
            type='text'
            label="Descrição"
            variant="outlined"
            name={"description"}
            value={form.description}
            onChange={onChange("description")}
            required
            fullWidth
            margin='dense'
          />

          <TextField
            type='text'
            label="Foto"
            variant="outlined"
            name={"image"}
            value={form.image}
            onChange={onChange("image")}
            required
            fullWidth
            margin='dense'
          />
          <CustomButton
            type={"submit"}
            variant='contained'
            fullWidth 
            size='large'
          >Adicionar Receita</CustomButton>
          
        </InputsContainer>
      </AddRecipeFormContainer>

      <CustomFormHelperText >{success.length > 0 && success}</CustomFormHelperText>
      <CustomFormHelperText error >{error.length > 0 && error}</CustomFormHelperText>
    </form>

  )
}

export default AddRecipesForm