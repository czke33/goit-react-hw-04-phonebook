import React from 'react';
import PropTypes from 'prop-types';
import style from './contactlist.module.css';

const Contact = ({ children }) => {
  return <li className={style.list}>{children}</li>;
};

Contact.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Contact;
