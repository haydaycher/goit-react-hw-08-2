import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  if (!contacts || contacts.length === 0) {
    return <p>No contacts available.</p>; // Виправлено логіку перевірки
  }

  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
