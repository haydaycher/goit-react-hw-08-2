import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegisterPage() {
  return (
    <div>
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
    </div>
  );
}

// import { Formik, Form, Field } from "formik";
// import "../../index.css";
// import { useDispatch } from "react-redux/dist/react-redux";

// const RegistrationPage = () => {
//   const dispatch = useDispatch();
//   const initialValues = { name: "", email: "", password: "" };
//   const handleSubmit = (values, options) => {
//     console.log(values);
//     dispatch(register(values));
//     options.resetForm();
//   };
//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="text-center lg:text-left">
//           <h1 className="text-5xl font-bold">Sign Up now!</h1>
//           <p className="py-6">
//             Створіть свій обліковий запис за кілька кроків і скористуйтеся
//             можливістю для створення власного телефонного довідника.
//           </p>
//         </div>
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <Formik onSubmit={handleSubmit} initialValues={initialValues}>
//             <Form className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <Field
//                   name="text"
//                   type="text"
//                   placeholder="name"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
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
//                 <label className="label"></label>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary" type="submit">
//                   Register
//                 </button>
//               </div>
//             </Form>
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationPage;
