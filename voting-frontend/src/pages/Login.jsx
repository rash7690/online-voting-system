import {

  useState

} from "react";

import axios from "axios";

import {

  Link,
  useNavigate

} from "react-router-dom";

import LoginBackground
from "../components/LoginBackground";

function Login() {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  // LOGIN
  const loginUser = async (e) => {

    e.preventDefault();

    try {

      const response =
        await axios.post(

          "http://localhost:8080/api/auth/login",

          {
            email,
            password
          }
        );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "role",
        response.data.role
      );

      localStorage.setItem(
        "name",
        response.data.name
      );

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid Credentials");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center relative text-white">

      <LoginBackground />

      <form

        onSubmit={loginUser}

        className="w-[420px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10"

      >

        <h1 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">

          Smart Voting

        </h1>

        <input

          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e) =>
            setEmail(e.target.value)
          }

          className="w-full p-4 rounded-xl bg-black/30 border border-white/20 mb-5 outline-none"

        />

        <input

          type="password"

          placeholder="Enter Password"

          value={password}

          onChange={(e) =>
            setPassword(e.target.value)
          }

          className="w-full p-4 rounded-xl bg-black/30 border border-white/20 mb-8 outline-none"

        />

        <button

          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-xl text-xl font-bold hover:scale-105 transition"

        >

          Login

        </button>

        <p className="text-center mt-6 text-gray-300">

          Don't have account?

          <Link
            to="/register"
            className="text-cyan-400 ml-2"
          >

            Register

          </Link>

        </p>

      </form>

    </div>
  );
}

export default Login;