import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app_content">
        <h1>Hi, I'm Joe!</h1>
      </div>
      <div className="app_button">
        <Button variant="contained" color="primary">Theme 1</Button>
        <Button variant="contained" color="secondary">Theme 2</Button>
      </div>
    </div>
  );
}

export default App;
