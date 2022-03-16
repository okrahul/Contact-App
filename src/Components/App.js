import React, { useEffect, useState } from 'react'
import "./App.css";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
// import ContactCard from './ContactCard';


const App = (props) => {
  const [contacts, setContacts] = useState([]);
const LOCAL_STORE_KEY = "contacts";
const addContactHandler = (contact) => {
  console.log(contacts)
  setContacts([...contacts, contact])
}
  
useEffect (() => {
  localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(contacts));
},[contacts]);


  return (
    <div>
      <Header />
      <AddContact addContactHandler = {addContactHandler} />
      <ContactList contacts = {contacts} />
   
    </div>
  )
}

export default App