import PropTypes from "prop-types";
import css from "./Error.module.css";

export default function Error({ children }) {
  return (
    <p className={css.textError}>
      <b>{children}</b>
    </p>
  );
}

Error.propTypes = {
  children: PropTypes.node.isRequired,
};
