import React, {useState} from 'react';
import './App.css';

function App() {
 //The input field data state goes here.
  const [searchItem, setSearchItem] = useState("");
  
 
 
 //make request and get data here
  const makeRequestAndShow = e => {
    e.preventDefault();   //preventing to the same screen
    console.log(searchItem);



    //set the field to empty after search
    //setSearchItem("");
  }
  
  
  
  return (
    <div className = "field-wrapper">
      <div className = "field">
         <h3>Wikipedia Viewer</h3>
         <input type = "field" value = {searchItem} onChange = {e => setSearchItem(e.target.value)}/>
          <button onClick = {makeRequestAndShow}>Search</button>
      </div>

    </div>
  );
}

export default App;
