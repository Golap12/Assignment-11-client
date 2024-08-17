/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import login from "../../../public/login.json";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    setLoginError("");

    try {
      const result = await signIn(email, password);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: result?.user?.email },
        { withCredentials: true }
      );
      toast.success("Login Success");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      toast.error("Invalid Email or Password!");
      setLoginError("Invalid Email or Password!");
    }
  };

  const continueWithGoogle = async () => {
    try {
      const result = await signInWithGoogle();

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: result?.user?.email },
        { withCredentials: true }
      );

      toast.success('Sign In Success');
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      console.error('Error during Google Sign-In:', err);
      toast.error('Sign In Failed');
    }
  };

  // const continueWithGithub = () => {
  //   githubLogin().then((result) => {
  //     navigate(location?.state ? location.state : "/");
  //     console.log(result);
  //   });
  // };

  return (
    <div className="bg-gray-900 p-5 text-white">
      <Helmet>
        <title>Foodie's | Login</title>
      </Helmet>

      <div className="flex md:flex-row-reverse flex-col sm:flex-col p-9 rounded-lg gap-5">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-teal-500">Welcome Back</h1>
          <div className="border-2 border-teal-500 mt-5 pb-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-gray-800">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input bg-gray-700 text-white"
                  required
                />
                <label className="label">
                  {loginError && (
                    <small className="text-red-500">{loginError}</small>
                  )}
                </label>
              </div>
              <div className="form-control mt-6">
                <AwesomeButton type="primary">
                  <p className="text-white">Login</p>
                </AwesomeButton>
              </div>
            </form>
            <p className="label-text-alt text-center text-white">
              Don't have an account?{" "}
              <span className="link font-bold text-teal-500">
                <Link to="/register">Register</Link>
              </span>
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 mt-5">
            <div className="flex flex-col w-2/4 border-opacity-50">
              <div className="divider text-white">OR</div>
            </div>

            <p className="w-full" onClick={continueWithGoogle}>
              <AwesomeButton className="w-full" type="whatsapp">
                <span>
                  <FcGoogle size={30} />
                </span>
                <span className="ml-3 text-white">Continue With Google</span>
              </AwesomeButton>
            </p>

            {/* <p className="w-full">
              <AwesomeButton className="w-full" type="github">
                <span>
                  <FaGithub size={30} />
                </span>
                <span className="ml-3 text-white">Continue With Github</span>
              </AwesomeButton>
            </p> */}
          </div>
        </div>

        <div className="flex-1 mt-5">
          <Lottie animationData={login}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Login;
