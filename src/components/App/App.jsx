import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";

export default function App() {
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchContacts())
  }, [dispach]);
  

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox />
      {loader && <Loader />}
      {error && <ErrorMessage/>}
      <ContactList/>
    </div>
  );
}
