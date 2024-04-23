import React from "react";
import { nanoid } from "nanoid";
import style from "./contactform.module.css";
import PropTypes from "prop-types";



 const ContactForm = (props) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();

    props.onSubmit({ id, name, number });

    form.reset();
  };

     return (
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <label htmlFor="name" id="label" className={style.label}>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+((['\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number" id="label"className={style.label}>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;