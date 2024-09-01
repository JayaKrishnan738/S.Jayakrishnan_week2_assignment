import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEntry from './components/AddEntry';
import EditEntry from './components/EditEntry';
import ViewEntries from './components/ViewEntries';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [entries, setEntries] = useState([]);

  // Add a new entry
  const addEntry = (entry) => {
    setEntries([...entries, { id: Date.now(), ...entry }]);
  };

  // Edit an existing entry
  const editEntry = (updatedEntry) => {
    setEntries(
      entries.map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry
      )
    );
  };

  // Delete an entry
  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <Router>
      <div className="container mt-5">
        <h1 className="text-center">Travel Journal</h1>
        <Routes>
          <Route
            path="/"
            element={<ViewEntries entries={entries} deleteEntry={deleteEntry} />}
          />
          <Route path="/add" element={<AddEntry addEntry={addEntry} />} />
          <Route
            path="/edit/:id"
            element={<EditEntry entries={entries} editEntry={editEntry} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

