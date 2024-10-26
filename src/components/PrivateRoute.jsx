import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import PropTypes from "prop-types"; // Імпорт PropTypes

export default function PrivateRoute({ component: Component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
}

// Додайте валідацію пропсів
PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // Визначте тип для component
  redirectTo: PropTypes.string.isRequired, // Визначте тип для redirectTo
};
