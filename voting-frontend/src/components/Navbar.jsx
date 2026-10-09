import {

  Link,
  useNavigate

} from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const role =
    localStorage.getItem("role");

  const name =
    localStorage.getItem("name");

  // LOGOUT
  const logout = () => {

    localStorage.clear();

    navigate("/");
  };

  return (

    <div className="bg-blue-600 text-white p-5 flex justify-between items-center shadow-lg">

      <h1 className="text-2xl font-bold">

        Online Voting System

      </h1>

      <div className="flex gap-6 items-center">

        <Link to="/dashboard">

          Dashboard

        </Link>

        <Link to="/results">

          Results

        </Link>

        {/* ADMIN ONLY */}

        {role === "ADMIN" && (

          <Link to="/admin">

            Admin Panel

          </Link>

        )}

        <span className="font-semibold">

          {name}

        </span>

        <button

          onClick={logout}

          className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"

        >

          Logout

        </button>

      </div>

    </div>
  );
}

export default Navbar;