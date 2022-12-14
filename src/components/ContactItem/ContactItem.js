import css from "../ContactItem/ContactItem.module.css"
import PropTypes from 'prop-types';
import { deleteTask } from "redux/contactsSlice";
import { useDispatch } from "react-redux";
const ContactItem=({item})=>{
const dispatch=useDispatch()
const handleDelete=(id)=>dispatch(deleteTask(id))
return(
    <li className={css.item}>
         <p className={css.name}>{item.name}: </p>
         <p className={css.number}>{item.number}</p>
         <button className={css.button} type="button" onClick={()=>handleDelete(item.id)}>Delete</button>
    </li>
)
}
ContactItem.propTypes={
    item:PropTypes.shape({
        name:PropTypes.string,
        number:PropTypes.string,
        id:PropTypes.string
    })
}
export default ContactItem
