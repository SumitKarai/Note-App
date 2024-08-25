import './App.css';
import Header from './Components/Header';
import Notes from './Components/Notes';
import { useEffect, useState } from 'react';

function App() {
  const [searchBar,setSearchBar]=useState("");
  const [noteArray,setNoteArray]=useState([])
useEffect(()=>{
  setNoteArray(JSON.parse(localStorage.getItem('newObject')))
},[])

  const filteredNotes = noteArray?.filter(note =>
    note.title.toLowerCase().includes(searchBar.toLowerCase())
  );
  return (
    <div className="App">
      <Header searchBar={searchBar} setSearchBar={setSearchBar} />
      <Notes noteArray={filteredNotes}  setNoteArray={setNoteArray} />
      
    </div>
  );
}

export default App;
