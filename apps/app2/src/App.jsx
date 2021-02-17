import { Container, CssBaseline } from '@material-ui/core';
import './App.css';
import { GridLayout } from 'GridLayout';

function App() {
  return (
    <div className="App">
      <CssBaseline />

      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
    </div>
  );
}

export default App;
