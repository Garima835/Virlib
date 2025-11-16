// import React from 'react';
// import '../Styling/Login.css'; 
// import { useNavigate } from 'react-router-dom';
// import logo from "../assets/Images/virlib_logo.png";

// const LoginForm = () => {

//   const navigate = useNavigate();
//   const handleNext =() => {
//     navigate('/Register')
//   }
//   const handleEnter =() => {
//     navigate('/Enter')
//   }
//   return (
//     <div className="wrapper">
//       <img src={logo} alt="" width ='320' height = '200'/>
//       <form action="">
//         <h1>Login</h1>

//         <div className="input-box">
//           <input type="text" placeholder="Username" required />
//           <i className="bx bxs-user"></i>
//         </div>

//         <div className="input-box">
//           <input type="password" placeholder="Password" required />
//           <i className="bx bxs-lock-alt"></i>
//         </div>

//         <div className="remember-forget">
//           <label>
//             <input type="checkbox" /> Remember Me   
//           </label>
//           <a href="#"> Forgot Password?</a>
//         </div>

//         <button onClick = {handleEnter} type="submit" className="btn">Login</button>

//         <div className="register-link">
//           <p>
//             Don't have an account? <a href="#" onClick = {handleNext}>Register</a>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
