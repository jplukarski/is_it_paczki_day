import React from 'react';
import MenuBar from './components/menubar'
import MainContent from './components/maincontent';
import Paper from '@material-ui/core/Paper';

export default function App() {
  return (
    <>
      <MenuBar />
      <Paper elevation={3}>
        <MainContent />
      </Paper>
    </>
  );
}