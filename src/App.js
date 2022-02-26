import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import EditContact from './components/EditContact';

function App() {

  const [contacts,setContacts] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const [searchResult,setSearchResult] = useState([]);

  const baseURL = "http://localhost:5000/contacts";

  //Add contact to JSON server
  const addContact = (contact) => {
    axios.post(baseURL,{...contact}).then((res) => {
      setContacts([...contacts,res.data]);
    })
  }

  //retrive from json server
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setContacts(res.data);
    });
  },[]);

  //Delete Contact
  const handleDelete = (id) => {
    axios.delete(`${baseURL}/${id}`).then(() => {
      setContacts(contacts.filter((task) => task.id !== id))
    })
  }

  //Edit Contact
  const editContact = (contact) =>{
    // console.log(contact)
    axios.put(`${baseURL}/${contact.id}`,{...contact}).then((res) => {
      setContacts(contacts.map((con) => con.id === contact.id ? res.data : con))
    })
  }

  //Search Contact
  const handleSearch = (keyword) => {
    setSearchTerm(keyword);

    if(keyword !== ''){
      const newContacts = contacts.filter((contact) => Object.values(contact).join(' ').toLowerCase().includes(keyword.toLowerCase())
      )
      setSearchResult(newContacts)
    }else{
      setSearchResult(contacts)
    }
  }

  return (
    <Router>
      <div className='bg-dark text-light'>
      <div className="container p-3">
        <div className="row justify-content-center">
          <div className="col-lg-6">
          <Header /> 
            <Routes>
              <Route path="/" element={<ContactList contacts={searchTerm.length < 1 ? contacts: searchResult} onDelete={handleDelete} term={searchTerm} onSearch={handleSearch} />}/>
              <Route path='/add' element={<AddContact onAdd={addContact}/>}/>
              <Route path='/edit' element={<EditContact onEdit={editContact}/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
    </Router>
    


  );
}

export default App;
