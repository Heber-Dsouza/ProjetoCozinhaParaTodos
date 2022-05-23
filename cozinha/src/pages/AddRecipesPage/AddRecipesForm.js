import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from "../../hooks/useForm"
import axios from 'axios';

import { CustomFormHelperText } from "./styled"

import { TextField } from '@mui/material';
import { Button } from '@mui/material'
import { BASE_URL } from '../../constants/urls';



const AddRecipesForm = () => {

  const navigate = useNavigate()

  const [form, onChange, clear] = useForm({title: "", description: "", image: ""})
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const createRecipe = () => {
    axios
    .post(`${BASE_URL}/recipe`, form, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res) => {
      console.log(res.data.message);
      setSuccess(res.data.message)
      setError("")
      clear()
    })
    .catch((err) => {
      setError(err.response.message)

    })
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    createRecipe()
  }

  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <div>
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
          <Button
            type={"submit"}
            variant='contained'
            fullWidth 
            size='large'
          >Adicionar Receita</Button>
          
        </div>
      </div>

      <CustomFormHelperText >{success.length > 0 && success}</CustomFormHelperText>
      <CustomFormHelperText error >{error.length > 0 && error}</CustomFormHelperText>
    </form>

  )
}

export default AddRecipesForm