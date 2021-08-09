import React from 'react'

import './App.css';




export default class App extends Component {
  const [darkMode, setdarkMode]
  render(){
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className="container">
        <span style={{ color: darkMode ? 'grey' : 'yellow' }}>*</span>
        <div classNamme="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setdarkMode(!darkMode)} />
            <span className="slider round"></span>
          </label>
        </div>

        <span style={{ color: darkMode ? '#c96dfd' : 'grey' }}>☽</span>

      </div>
      <div>
        <h1>Cool its {darkMode ? 'Dark' : 'Light'} Mode</h1>
      </div>
    </div>
  );
}
}
