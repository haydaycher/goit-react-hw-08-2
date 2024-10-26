import PropTypes from "prop-types"; // Імпорт PropTypes
import css from "./PageTitle.module.css";

export default function PageTitle({ children }) {
  return <h1 className={css.heading}>{children}</h1>;
}

// Додайте валідацію пропсів
PageTitle.propTypes = {
  children: PropTypes.node.isRequired, // Визначте тип для children
};
