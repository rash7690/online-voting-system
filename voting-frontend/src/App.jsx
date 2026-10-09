import {

  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";

import Login
from "./pages/Login";

import Register
from "./pages/Register";

import Dashboard
from "./pages/Dashboard";

import Results
from "./pages/Results";

import Admin
from "./pages/Admin";

import ProtectedRoute
from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN PAGE */}

        <Route

          path="/"

          element={<Login />}

        />

        {/* REGISTER PAGE */}

        <Route

          path="/register"

          element={<Register />}

        />

        {/* USER DASHBOARD */}

        <Route

          path="/dashboard"

          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }

        />

        {/* RESULTS PAGE */}

        <Route

          path="/results"

          element={

            <ProtectedRoute>

              <Results />

            </ProtectedRoute>
          }

        />

        {/* ADMIN PAGE */}

        <Route

          path="/admin"

          element={

            <ProtectedRoute>

              <Admin />

            </ProtectedRoute>
          }

        />

        {/* 404 PAGE */}

        <Route

          path="*"

          element={

            <div className="min-h-screen bg-black text-white flex items-center justify-center text-5xl font-bold">

              404 | Page Not Found

            </div>
          }

        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;