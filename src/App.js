import React from "react"
import Header from "./Components/header"
import './App.css';
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_body">
        <Sidebar />
        <Feed />
        
        {/* widgets*/}
      </div>
     
    </div>
  );
}

export default App;
