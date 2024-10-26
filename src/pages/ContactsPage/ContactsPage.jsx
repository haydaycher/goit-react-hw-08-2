import React, { useEffect } from "react"; // Додано імпорт React
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchContacts());
      } catch (err) {
        console.error("Не вдалося завантажити контакти:", err); 
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className={css.App}>
      <h1 className={css.AppTitle}>Телефонний довідник</h1>
      {loading && <Loader>Завантаження...</Loader>}
      {error && <Error>Помилка завантаження контактів: {error}</Error>}{" "}
      {/* Відображення деталей помилки */}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
