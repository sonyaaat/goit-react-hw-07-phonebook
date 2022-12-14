import ContactsList from '../components/ContactsList/ContactsList';
import ContactsEditor from '../components/ContactsEditor/ContactsEditor';
import Filter from '../components/Filter/Filter';
import { getIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';
import Spinner from './Spinner/Spinner';
const App = () => {
 const isLoading=useSelector(getIsLoading)

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactsEditor />
      <Filter />
      <h1 className="title">Contacts</h1>
      {isLoading && <Spinner/>}
      <ContactsList />
    </div>
  );
};

export default App;
