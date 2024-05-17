
import React from 'react';
import Contact from './Contact/Contact';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectLoading, selectError } from '../../redux/contactsSlice';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <li className={styles.item} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;