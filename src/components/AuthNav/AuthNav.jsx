import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
// import clsx from "clsx";
// import { useSelector } from "react-redux/dist/react-redux";
// import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

// const Header = () => {
//   const buildLinkClass = ({ isActive }) => {
//     return clsx(css.link, isActive && css.activeLink);
//   };
//   const user = useSelector(selectUser);
//   const isLoggedIn = useSelector(selectIsLoggedIn);
// };

// export default function AuthNav() {
//   return (
//     <div className={css.wrapperHeader}>
//       <div>PhoneBook</div>
//       <div>Welcome, {user.name}!</div>
//       <div className={css.wrapperLinks}>
//         <NavLink className={css.link} to="/">
//           Home
//         </NavLink>
//         <NavLink className={css.link} to="/contacts">
//           Contacts
//         </NavLink>
//         {!isLoggedIn && (
//           <>
//             <NavLink className={css.link} to="/register">
//               Register
//             </NavLink>
//             <NavLink className={css.link} to="/login">
//               Log In
//             </NavLink>
//           </>
//         )}
//         {isLoggedIn && <button className="btn btn-secondary">Exit</button>}
//       </div>
//     </div>
//   );
// }

export default function AuthNav() {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
