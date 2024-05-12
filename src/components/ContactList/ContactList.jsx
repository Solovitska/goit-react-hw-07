import Contact from "./Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contactsReducer.js";
import { selectFilteredContacts } from "../../redux/contactsReducer.js";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

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