import './App.css';
import React from "react"
import Purchase from './component/purchase';

function App() {
  return (
    <div className="App">
      <header className="App-header" id = 'page-Header'>
         Expense Tracker
      </header>
      <Purchase />
    </div>
  );
}

export default App;
