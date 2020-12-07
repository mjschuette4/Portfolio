import React from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app_header">
      <Button>Blog</Button>
        <div className="app_header_social">
          <Button><GitHubIcon/></Button>
          <Button><LinkedInIcon/></Button>
          <Button><TwitterIcon/></Button>
          <Button><FacebookIcon/></Button>
        </div>
      </div>
      <div className="app_intro">
        <div className="app_content">
          <h1>Hi, I'm Joe!</h1>
        </div>
        <div className="app_button">
          <Button variant="contained" color="primary">Theme 1</Button>
          <Button variant="contained" color="secondary">Theme 2</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
