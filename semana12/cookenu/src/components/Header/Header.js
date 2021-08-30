import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar } from './styled';
import Button from '@material-ui/core/Button';
import { goToLogin, goToRecipesList } from "../../routes/coodinator"
import { useHistory } from 'react-router';




const Header = () => {
    const history = useHistory()
   return (
    
      <AppBar position="static">
        <StyledToolbar>
        <Button onClick={() => goToRecipesList(history)} color="inherit">Cookenu</Button>
        <Button onClick={() => goToLogin(history)} color="inherit">Ir para login</Button>
        </StyledToolbar>
      </AppBar>
    
  )
}

export default Header
