import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {

  const [contacts,setContacts] = useState([]);

  const baseURL = "http://localhost:5000/contacts";

  const addContact = (contact) => {
    setContacts([...contacts,contact]);
  }

  //retrive from json server
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setContacts(res.data);
    });
  },[]);

  return (
    <Router>
      <div className='bg-dark text-light'>
      <div className="container p-3">
        <div className="row justify-content-center">
          <div className="col-lg-6">
          <Header /> 
            <Routes>
              <Route path="/" element={<ContactList contacts={contacts} />}/>
              <Route path='/add' element={<AddContact onAdd={addContact}/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
    </Router>
    


  );
}

export default App;
