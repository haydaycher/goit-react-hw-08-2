import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  if (!contacts) {
    return <p>Error loading contacts.</p>;
  }

  return (
    <div>
      <ul className={css.contactList}>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <li key={contact.id}>
              <Contact data={contact} />
            </li>
          ))
        ) : (
          <p>No contacts available.</p>
        )}
      </ul>
    </div>
  );
}
