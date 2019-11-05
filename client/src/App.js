import React from 'react';
import MenuBar from './components/menubar'
import MainContent from './components/maincontent'
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <>
      <MenuBar />
      <Grid
        container
        spacing={0}
        align="center"
        justify="center"
        direction="column"
      // style={{ backgroundColor: 'teal' }}
      >
        <Grid item>
          <MainContent />
        </Grid>
      </Grid >
    </>
  );
}

export default App;