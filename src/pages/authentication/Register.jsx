/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffSharp } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Lottie from "lottie-react";
import register from "../../../public/register.json";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, signInWithGoogle, githubLogin } = useContext(AuthContext); // Include githubLogin
  const [error, setError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photoURL = form.get("photoUrl");

    setRegisterError("");
    setError("");

    // Password Validation
    if (password.length < 6) {
      setError("Password should be at least 6 characters long!");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least 1 uppercase character!");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least 1 lowercase character!");
      return;
    }

    // Register User
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name, photoURL)
          .then(() => {
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
          });
      })
      .catch((error) => {
        console.error("Registration error:", error);
        setRegisterError(error.message.slice(22, 50));
      });
  };

  const continueWithGoogle = () => {
    signInWithGoogle().then((result) => {
      navigate("/"); // Change to your desired redirect path
      console.log(result);
    });
  };

  const continueWithGithub = () => {
    githubLogin().then((result) => {
      navigate("/"); // Change to your desired redirect path
      console.log(result);
    });
  };

  return (
    <div className="bg-gray-900 p-5 text-white">
      <div className="flex md:flex-row-reverse flex-col sm:flex-col p-9 rounded-lg gap-5">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-teal-500">Create an Account</h1>
          <div className="border-2 border-teal-500 mt-5 pb-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-gray-800">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input bg-gray-700 text-white"
                  required
                />
              </div>
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
                  <span className="label-text text-white">Photo URL (optional)</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Photo URL"
                  className="input bg-gray-700 text-white"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input bg-gray-700 text-white"
                  required
                />

                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer absolute top-[3.3rem] right-[11px]"
                >
                  {showPassword ? <IoEyeOffSharp /> : <MdRemoveRedEye />}
                </span>
              </div>

              {error && <small className="text-teal-400">{error}</small>}
              {registerError && (
                <small className="text-teal-400">{registerError}</small>
              )}

              <div className="form-control mt-6">
                <AwesomeButton type="primary">
                  <p className="text-white">Register</p>
                </AwesomeButton>
              </div>
            </form>
            <p className="label-text-alt text-center text-white">
              Already have an account?{" "}
              <span className="link font-bold text-teal-500">
                <Link to="/login">Login</Link>
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

            <p className="w-full" onClick={continueWithGithub}>
              <AwesomeButton className="w-full" type="github">
                <span>
                  <FaGithub size={30} />
                </span>
                <span className="ml-3 text-white">Continue With Github</span>
              </AwesomeButton>
            </p>
          </div>
        </div>

        <div className="flex-1 mt-5">
          <Lottie animationData={register}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Register;
