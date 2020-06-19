import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

export default function TopBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
            <PeopleOutlineIcon style={{ fontSize: 45 }} />
            <Box m={2} clone>
              <Typography variant="h6" >
                Users app
              </Typography>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
