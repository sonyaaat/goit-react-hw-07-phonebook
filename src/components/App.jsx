import ContactsList from '../components/ContactsList/ContactsList';
import ContactsEditor from '../components/ContactsEditor/ContactsEditor';
import Filter from '../components/Filter/Filter';
const App = () => {
  
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem(KEY)) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(KEY, JSON.stringify(contacts));
  // }, [contacts]);
  // const addContact = ({ name, number }) => {
  //   const isAdded = contacts.some(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  //   if (isAdded) {
  //     Notiflix.Notify.warning(`${name} is already in contacts`);
  //     return 1;
  //   }
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   setContacts(prevState => [contact, ...prevState]);
  // };
  // const changeFilter = evt => {
  //   setFilter(evt.currentTarget.value);
  // };
  // const filterContacts = () => {
  //   const filtered = filter.toLowerCase();
  //   const visibleContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filtered)
  //   );
  //   return visibleContacts;
  // };
  // const deleteContact = id => {
  //   setContacts(prevState => prevState.filter(contact => contact.id !== id));
  // };

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactsEditor />
      <Filter />
      <h1 className="title">Contacts</h1>
      <ContactsList/>
    </div>
  );
};

export default App;
