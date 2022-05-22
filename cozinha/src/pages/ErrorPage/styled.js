import styled from '@emotion/styled';
import { Typography } from '@mui/material'

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  margin-top: 60px;
`
export const ErrorImage = styled.img`
  width: 64vw;
  max-width: 450px;
`
export const ErrorText = styled(Typography)`
  margin: 40px;
`