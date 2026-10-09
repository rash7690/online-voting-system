import {

  useState,
  useEffect

} from "react";

import axios from "axios";

import Navbar
from "../components/Navbar";

import AdminBackground
from "../components/AdminBackground";

function Admin() {

  const [name, setName] =
    useState("");

  const [party, setParty] =
    useState("");

  const [symbol, setSymbol] =
    useState("");

  const [logo, setLogo] =
    useState("");

  const [candidates, setCandidates] =
    useState([]);

  // FETCH CANDIDATES
  const fetchCandidates = async () => {

    try {

      const response =
        await axios.get(

          "http://localhost:8080/api/candidates"
        );

      setCandidates(response.data);

    } catch (error) {

      console.log(error);

      alert("Failed To Load Candidates");
    }
  };

  // LOAD DATA
  useEffect(() => {

    fetchCandidates();

  }, []);

  // ADD CANDIDATE
  const addCandidate = async (e) => {

    e.preventDefault();

    try {

      await axios.post(

        "http://localhost:8080/api/candidates/add",

        {
          name,
          party,
          symbol,
          logo
        }
      );

      alert("Candidate Added Successfully");

      setName("");
      setParty("");
      setSymbol("");
      setLogo("");

      fetchCandidates();

    } catch (error) {

      console.log(error);

      alert("Failed To Add Candidate");
    }
  };

  // DELETE CANDIDATE
  const deleteCandidate = async (id) => {

    try {

      await axios.delete(

        `http://localhost:8080/api/candidates/${id}`
      );

      alert("Candidate Deleted");

      fetchCandidates();

    } catch (error) {

      alert("Delete Failed");
    }
  };

  return (

    <div className="min-h-screen text-white relative overflow-hidden">

      {/* BACKGROUND */}

      <AdminBackground />

      {/* NAVBAR */}

      <Navbar />

      {/* CONTENT */}

      <div className="relative z-10 p-10">

        {/* HEADER */}

        <div className="mb-10">

          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">

            Engineering Admin Panel

          </h1>

          <p className="text-gray-300 mt-3 text-lg">

            Manage Election Candidates & Party Details

          </p>

        </div>

        {/* FORM CARD */}

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl">

          <h2 className="text-3xl font-bold mb-8 text-cyan-300">

            Add New Candidate

          </h2>

          {/* FORM */}

          <form

            onSubmit={addCandidate}

            className="space-y-6"

          >

            <input

              type="text"

              placeholder="Candidate Name"

              value={name}

              onChange={(e) =>
                setName(e.target.value)
              }

              className="w-full p-4 rounded-2xl bg-black/30 border border-white/20 outline-none"

              required

            />

            <input

              type="text"

              placeholder="Party Name"

              value={party}

              onChange={(e) =>
                setParty(e.target.value)
              }

              className="w-full p-4 rounded-2xl bg-black/30 border border-white/20 outline-none"

              required

            />

            <input

              type="text"

              placeholder="Election Symbol"

              value={symbol}

              onChange={(e) =>
                setSymbol(e.target.value)
              }

              className="w-full p-4 rounded-2xl bg-black/30 border border-white/20 outline-none"

              required

            />

            <input

              type="text"

              placeholder="Party Logo Image URL"

              value={logo}

              onChange={(e) =>
                setLogo(e.target.value)
              }

              className="w-full p-4 rounded-2xl bg-black/30 border border-white/20 outline-none"

              required

            />

            {/* PREVIEW */}

            {

              logo && (

                <div className="flex justify-center">

                  <img

                    src={logo}

                    alt="preview"

                    className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"

                  />

                </div>
              )
            }

            <button

              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl font-bold text-xl hover:scale-105 transition duration-300"

            >

              Add Candidate

            </button>

          </form>

        </div>

        {/* CANDIDATE LIST */}

        <div className="mt-14">

          <h2 className="text-4xl font-bold mb-8 text-yellow-300">

            Candidate Management

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {candidates.map((candidate) => (

              <div

                key={candidate.id}

                className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl hover:scale-105 transition duration-500"

              >

                {/* LOGO */}

                <img

                  src={candidate.logo}

                  alt="logo"

                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-xl"

                />

                {/* NAME */}

                <h2 className="text-3xl font-bold text-center mb-3">

                  {candidate.name}

                </h2>

                {/* PARTY */}

                <p className="text-center text-cyan-300 text-xl">

                  {candidate.party}

                </p>

                {/* SYMBOL */}

                <p className="text-center mt-4">

                  Symbol:

                  <span className="font-bold ml-2 text-yellow-300">

                    {candidate.symbol}

                  </span>

                </p>

                {/* VOTES */}

                <p className="text-center mt-3 text-green-400 font-bold text-lg">

                  Votes: {candidate.votes}

                </p>

                {/* DELETE */}

                <button

                  onClick={() =>
                    deleteCandidate(candidate.id)
                  }

                  className="w-full mt-8 bg-gradient-to-r from-red-500 to-pink-600 p-4 rounded-2xl font-bold hover:scale-105 transition"

                >

                  Delete Candidate

                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Admin;