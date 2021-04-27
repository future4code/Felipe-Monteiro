import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 12vh;
`
export const LogoImage = styled.img`
    width: 70vw;
    max-width: 350px;
    margin: 24px;
`
export const StyledButton = styled.div`
    display: flex;
    flex-direction: row;
    margin: 50px;
`
export const ButtonDiv = styled.div`
    margin: 10px;
`
export const AddRecipeButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`