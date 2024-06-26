import React, { useEffect, useState, useRef } from "react";
import style from "./app.module.css";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
 
const KEY = "Contacts";

const App = () => {
	const [contacts, setContacts] = useState([]);
	const [filter, setFilter] = useState("");
	const isMounted = useRef(false);

	useEffect(() => {
		const savedContacts = JSON.parse(localStorage.getItem(KEY));
		savedContacts && setContacts([...savedContacts]);
	}, []);

	useEffect(() => {
		if (isMounted.current) {
			localStorage.setItem(KEY, JSON.stringify(contacts));
		} else {
			isMounted.current = true;
		}
	}, [contacts]);

	const checkContact = (newContact) => {
		const isInBase = contacts.some((contact) => contact.name === newContact.name);
		return isInBase;
	};

	const addContact = (newContact) => {
		const check = checkContact(newContact);
		if (!check) {
			let actualContacts = contacts;
			actualContacts.push(newContact);
			setContacts([...actualContacts]);
		} else {
			alert(`${newContact.name} is alerdy in contacts`);
		}
	};

	const changeFilterValue = (e) => {
		setFilter(e.target.value);
	};

	const deleteUser = (e) => {
		const filteredContacts = contacts.filter((contact) => contact.id !== e.target.id);
		setContacts(filteredContacts);
	};

    return (
      <div className={style.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter changeHandler={changeFilterValue} />
        <ContactList
          filter={filter}
          contacts={contacts}
          deleteFunction={deleteUser}
        ></ContactList>
      </div>
    );
  }


export default App;