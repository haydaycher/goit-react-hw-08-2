import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function LoginPage() {
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
    </div>
  );
}
// import { useDispatch } from "react-redux/dist/react-redux";
// import "../../index.css";

// import { Formik, Form, Field } from "formik";

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const initialValues = {
//     email: "",
//     password: "",
//   };
//   const handleSubmit = (values, options) => {
//     console.log(values);
//     console.log(login(values));
//     options.resetForm();
//   };
//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="text-center lg:text-left">
//           <h1 className="text-5xl font-bold">Login now!</h1>
//           <p className="py-6">
//             Введіть ваш логін та пароль для доступу до облікового запису. Це
//             займе всього кілька секунд!
//           </p>
//         </div>
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <Formik onSubmit={handleSubmit} initialValues={initialValues}>
//             <Form className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <Field
//                   name="email"
//                   type="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <Field
//                   name="password"
//                   type="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                 />
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary" type="submit">
//                   Login
//                 </button>
//               </div>
//             </Form>
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
