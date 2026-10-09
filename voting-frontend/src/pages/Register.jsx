import {

  useState

} from "react";

import axios from "axios";

import {

  Link,
  useNavigate

} from "react-router-dom";

import {

  GoogleLogin

} from "@react-oauth/google";

import RegisterBackground
from "../components/RegisterBackground";

function Register() {

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [usn, setUsn] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [otpVerified,
    setOtpVerified] =
    useState(false);

  // SEND OTP
  const sendOtp = async () => {

    try {

      const response =
        await axios.post(

          `http://localhost:8080/api/otp/send/${email}`
        );

      alert(response.data);

    } catch (error) {

      alert("Failed To Send OTP");
    }
  };

  // VERIFY OTP
  const verifyOtp = async () => {

    try {

      const response =
        await axios.post(

          `http://localhost:8080/api/otp/verify?email=${email}&otp=${otp}`
        );

      if (

        response.data ===
        "OTP Verified"

      ) {

        setOtpVerified(true);

        alert("OTP Verified Successfully");

      } else {

        alert("Invalid OTP");
      }

    } catch (error) {

      alert("OTP Verification Failed");
    }
  };

  // REGISTER
  const registerUser = async (e) => {

    e.preventDefault();

    // OTP CHECK
    if (!otpVerified) {

      alert("Please Verify OTP");

      return;
    }

    try {

      const response =
        await axios.post(

          "http://localhost:8080/api/auth/register",

          {
            name,
            email,
            usn,
            password,
            phone
          }
        );

      alert(response.data);

      if (

        response.data ===
        "User Registered Successfully"

      ) {

        navigate("/");
      }

    } catch (error) {

      alert(

        error.response?.data ||

        "Registration Failed"
      );
    }
  };

  // GOOGLE LOGIN
  const handleGoogleSuccess =
    async (credentialResponse) => {

      console.log(
        credentialResponse
      );

      alert(
        "Google Login Successful"
      );
    };

  return (

    <div className="min-h-screen flex items-center justify-center relative text-white">

      <RegisterBackground />

      <form

        onSubmit={registerUser}

        className="w-[450px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10"

      >

        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">

          Student Registration

        </h1>

        {/* NAME */}

        <input

          type="text"

          placeholder="Full Name"

          value={name}

          onChange={(e) =>
            setName(e.target.value)
          }

          className="w-full p-4 rounded-2xl bg-black/30 border border-white/20 mb-4"

          required

        />

        {/* EMAIL */}

        <input

          type="email"

          placeholder="College Email"

          value={email}

          onChange={(e) =>
            setEmail(e.target.value)
          }

          className="w-full p-4 rounded-2xl bg-black/30 border border-white/20 mb-4"

          required

        />

        {/* USN */}

        <input

          type="text"

          placeholder="USN"

          value={usn}

          onChange={(e) =>
            setUsn(e.target.value)
          }

          className="w-full p-4 rounded-2xl bg-black/30 border border-white/20 mb-4"

          required

        />

        {/* PASSWORD */}

        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e) =>
            setPassword(e.target.value)
          }

          className="w-full p-4 rounded-2xl bg-black/30 border border-white/20 mb-4"

          required

        />

        {/* PHONE */}

        <input

          type="text"

          placeholder="Phone Number"

          value={phone}

          onChange={(e) =>
            setPhone(e.target.value)
          }

          className="w-full p-4 rounded-2xl bg-black/30 border border-white/20 mb-4"

          required

        />

        {/* OTP */}

        <div className="flex gap-3 mb-4">

          <input

            type="text"

            placeholder="Enter OTP"

            value={otp}

            onChange={(e) =>
              setOtp(e.target.value)
            }

            className="w-full p-4 rounded-2xl bg-black/30 border border-white/20"

          />

          <button

            type="button"

            onClick={sendOtp}

            className="bg-blue-600 px-5 rounded-2xl"

          >

            Send

          </button>

        </div>

        {/* VERIFY BUTTON */}

        <button

          type="button"

          onClick={verifyOtp}

          className="w-full bg-green-600 p-4 rounded-2xl font-bold mb-6"

        >

          Verify OTP

        </button>

        {/* VERIFIED */}

        {

          otpVerified && (

            <div className="bg-green-500/20 border border-green-400 p-4 rounded-2xl mb-6 text-center">

              OTP Verified Successfully ✅

            </div>
          )
        }

        {/* REGISTER */}

        <button

          className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 p-4 rounded-2xl text-xl font-bold hover:scale-105 transition"

        >

          Register

        </button>

        {/* GOOGLE LOGIN */}

        <div className="mt-8 flex justify-center">

          <GoogleLogin

            onSuccess={
              handleGoogleSuccess
            }

            onError={() => {

              alert(
                "Google Login Failed"
              );
            }}

          />

        </div>

        {/* LOGIN */}

        <p className="text-center mt-6 text-gray-300">

          Already Registered?

          <Link
            to="/"
            className="text-cyan-400 ml-2"
          >

            Login

          </Link>

        </p>

      </form>

    </div>
  );
}

export default Register;