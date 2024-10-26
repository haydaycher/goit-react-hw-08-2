import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // Імпорт PropTypes

export default function RestrictedRoute({ component: Component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}

// Додайте валідацію пропсів
RestrictedRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // Визначте тип для component
  redirectTo: PropTypes.string.isRequired, // Визначте тип для redirectTo
};
