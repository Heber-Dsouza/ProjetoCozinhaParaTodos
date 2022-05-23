import React, { useContext, useState } from 'react'

import {useNavigate} from 'react-router-dom'
import useForm from "../../hooks/useForm"
import { goToSignupPage } from '../../routes/coordinator';
import { GlobalStateContext } from '../../global/context/GlobalStateContext';

import { TextField } from '@mui/material';
// import { Button } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputContainer, CustomButton, CustomButtonLogin, CustomFormHelperText } from './styled'

import {Login} from "../../services/user"

const LoginForm = () => {

  const navigate = useNavigate()

  const { setRightButton } = useContext(GlobalStateContext)

  const [error, setError] = useState("")

  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitForm = (event) => {
    event.preventDefault()
    Login(form, clear, setError, navigate, setRightButton)
    console.log(form);
  }

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>

        <CustomFormHelperText>{error.length > 0 && error}</CustomFormHelperText>

        <TextField
          type='email'
          label="Email"
          variant="outlined"
          name={"email"}
          value={form.email}
          onChange={onChange("email")}
          required
          fullWidth
          autoFocus
          margin='dense'
        />

        <FormControl
          fullWidth
          variant="outlined"
          margin='dense'

          
        >
          <InputLabel htmlFor="outlined-adornment-password" >Senha</InputLabel>
          <OutlinedInput
            value={form.password}
            onChange={onChange("password")}
            required
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}

            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Senha"
          />
        </FormControl>
        
        <CustomButtonLogin
          type={"submit"}
          variant='contained'
          fullWidth size='large'
        >Login</CustomButtonLogin>

      </form>


      <CustomButton
        variant='outlined'
        fullWidth size='large'
        onClick={() => goToSignupPage(navigate)}
      ><span>Não possui uma conta?</span> Faça aqui o seu cadastro</CustomButton>

    </InputContainer>
  )
}

export default LoginForm