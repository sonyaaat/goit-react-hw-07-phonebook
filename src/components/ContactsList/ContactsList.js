import css from '../ContactsList/ContactsList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterLow = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterLow)
  );

  return visibleContacts.length === 0 && contacts.length !== 0 ? (
    <h2 className={css.notify}>There isn`t such contact</h2>
  ) : (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} item={contact} />
      ))}
    </ul>
  );
};
export default ContactsList;
