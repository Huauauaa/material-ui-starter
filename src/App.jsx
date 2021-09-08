import React from 'react';
import Button from '@material-ui/core/Button';
import Demo from './components/Demo';

function App() {
  return (
    <>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Button variant="contained" color="secondary">
        secondary
      </Button>
      <Demo />
    </>
  );
}

export default App;
