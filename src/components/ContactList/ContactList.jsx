import { useSelector } from "react-redux";
import {  selectFilteredContacts } from "../../redux/contactsSlice";


import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filterContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
