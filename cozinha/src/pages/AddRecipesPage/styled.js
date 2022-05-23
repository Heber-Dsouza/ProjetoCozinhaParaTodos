import styled from '@emotion/styled';

import { Button } from '@mui/material'
import { FormHelperText } from '@mui/material';

export const CustomFormHelperText = styled(FormHelperText)`
  color: green;
  font-size: 15px;
`
export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`
export const AddRecipeFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`
export const CustomButton = styled(Button)`
  margin-top: 8px;
`
