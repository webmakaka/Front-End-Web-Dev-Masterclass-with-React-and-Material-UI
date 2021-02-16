import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import './App.css';
import NavigationBar from 'NavigationBar';
import { GridLayout } from 'GridLayout';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavigationBar />
      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
    </div>
  );
}

export default App;
