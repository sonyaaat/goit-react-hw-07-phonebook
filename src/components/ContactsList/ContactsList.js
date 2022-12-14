import css from '../ContactsList/ContactsList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
const ContactsList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);
  const filterLow = filter.toLowerCase();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterLow)
  );

  return visibleContacts.length === 0 && contacts.length !== 0 ? (
    <h2 className={css.notify}>There isn`t such contact</h2>
  ) : (
    contacts.length > 0 && (
      <ul className={css.list}>
        {contacts &&
          visibleContacts.map(contact => (
            <ContactItem key={contact.id} item={contact} />
          ))}
      </ul>
    )
  );
};
export default ContactsList;
