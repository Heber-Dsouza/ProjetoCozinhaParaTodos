import styled from "styled-components"

import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Border from "../../assets/img/border.png"


export const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LogoImg = styled.img`
  width: 60px;
  padding: 2px;
  border-radius: 15px;
  border: 7px solid black;
  border-image: url(${Border}) 20 round;
`
export const LogoButton = styled(Button)`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  
`