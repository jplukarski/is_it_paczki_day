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
        justify="center"
      // style={{ backgroundColor: 'teal' }}
      >
        <Grid
          container
          direction="column"
          align="center"
        >
          <MainContent />
        </Grid>
      </Grid >
    </>
  );
}

export default App;