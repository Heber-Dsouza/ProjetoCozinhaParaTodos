import styled from '@emotion/styled';

import { Button } from '@mui/material'
import { FormHelperText } from '@mui/material';

export const Welcome = styled.h1`
  margin: 0;
  font-size: 25px;
`
export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 7.5vh;
`
export const SlideImg = styled.img`
  width: 75vw;
  max-width: 350px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`
export const CustomButton = styled(Button)`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
    span{
      font-size: 10px;
    }
`
export const CustomButtonLogin = styled(Button)`
  margin-top: 8px;
`
export const CustomFormHelperText = styled(FormHelperText)`
  color: red;
`