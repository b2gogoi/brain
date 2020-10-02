import React, { useState } from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TagSelectorBox from './components/TagSelectorBox';

function App() {
  const [show, toggleShow] = useState(false);

  const skillsTagData = {
    name: 'Skills Needed',
    tags: [
      'Agriculture', 
      'Air Transportation', 
      'Chemical Manufacturing', 
      'Computer Science & Information Systems', 
      'Chemical Engineering',
      'Civil & Structural Engineering', 
      'Electrical & Electronic Engineering',
      'Mechanical Engineering', 
      'Mineral & Mining Engineering',
      'Agriculture 2', 
      'Air Transportation 2', 
      'Chemical Manufacturing 2', 
      'Computer Science 2', 
      'Chemical Engineering 2',
      'Civil & Structural Engineering 2', 
      'Electrical & Electronic Engineering 2',
      'Mechanical Engineering 2', 
      'Mineral & Mining Engineering 2'
      ]
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        {!show && <Button onClick={() => toggleShow(true)}>Bootstrap Toast Test</Button>}
        <Toast show={show} onClose={() => toggleShow(false)}>
          <Toast.Header>
            <strong className="mr-auto">React-Bootstrap</strong>
          </Toast.Header>
          <Toast.Body>Bom dia!</Toast.Body>
        </Toast>

      </header> */}
      <div>
        <TagSelectorBox 
          name={skillsTagData.name} tags={skillsTagData.tags} 
          
        ></TagSelectorBox>
      </div>
    </div>
  );
}

export default App;
