import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import './App.css';
import { NavigationBar } from 'NavigationBar';
import { Container } from '@material-ui/core';
import { GridLayout } from 'GridLayout';
import { Footer } from 'Footer';

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
      <Footer />
    </div>
  );
}

export default App;
