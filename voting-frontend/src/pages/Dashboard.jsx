import {

  useEffect,
  useState

} from "react";

import axios from "axios";

import Navbar
from "../components/Navbar";

import DashboardBackground
from "../components/DashboardBackground";

function Dashboard() {

  const [candidates, setCandidates] =
    useState([]);

  const [timeLeft, setTimeLeft] =
    useState("");

  // FETCH CANDIDATES
  const fetchCandidates = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(

          "http://localhost:8080/api/candidates",

          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      setCandidates(response.data);

    } catch (error) {

      alert("Failed to Load Candidates");
    }
  };

  // VOTE
  const voteCandidate = async (
    candidateId
  ) => {

    try {

      const token =
        localStorage.getItem("token");

      await axios.post(

        `http://localhost:8080/api/vote/1/${candidateId}`,

        {},

        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      alert("Vote Cast Successfully");

      fetchCandidates();

    } catch (error) {

      alert(

        error.response?.data ||

        "Voting Failed"
      );
    }
  };

  // LOAD DATA
  useEffect(() => {

    fetchCandidates();

  }, []);

  // ELECTION TIMER
  useEffect(() => {

    const electionDate =
      new Date("2026-12-31T23:59:59");

    const timer =
      setInterval(() => {

        const now = new Date();

        const difference =
          electionDate - now;

        if (difference <= 0) {

          setTimeLeft("Election Ended");

          clearInterval(timer);

          return;
        }

        const days =
          Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
          );

        const hours =
          Math.floor(
            (difference %
              (1000 * 60 * 60 * 24)) /

            (1000 * 60 * 60)
          );

        const minutes =
          Math.floor(
            (difference %
              (1000 * 60 * 60)) /

            (1000 * 60)
          );

        const seconds =
          Math.floor(
            (difference %
              (1000 * 60)) / 1000
          );

        setTimeLeft(

          `${days}d ${hours}h ${minutes}m ${seconds}s`

        );

      }, 1000);

    return () =>
      clearInterval(timer);

  }, []);

  // TOTAL VOTES
  const totalVotes =
    candidates.reduce(

      (sum, c) =>
        sum + c.votes,

      0
    );

  return (

    <div className="min-h-screen text-white relative overflow-hidden">

      {/* BACKGROUND */}

      <DashboardBackground />

      {/* NAVBAR */}

      <Navbar />

      {/* CONTENT */}

      <div className="relative z-10 p-10">

        {/* HEADER */}

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

            Engineering Election Portal

          </h1>

          <div className="bg-red-600/80 backdrop-blur-lg px-6 py-3 rounded-2xl shadow-2xl border border-red-400">

            Election Ends:

            <span className="ml-3 font-bold text-yellow-300">

              {timeLeft}

            </span>

          </div>

        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {candidates.map((candidate) => (

            <div

              key={candidate.id}

              className={`

                p-8 rounded-3xl backdrop-blur-xl

                shadow-2xl border

                transition duration-500

                hover:scale-105 hover:shadow-cyan-500/30

                ${

                  candidate.votes ===

                  Math.max(
                    ...candidates.map(
                      c => c.votes
                    )
                  )

                  ?

                  "bg-yellow-300/20 border-yellow-400"

                  :

                  "bg-white/10 border-white/20"
                }

              `}

            >

              {/* PARTY LOGO */}

              <img

                src={candidate.logo}

                alt="logo"

                className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-xl"

              />

              {/* NAME */}

              <h2 className="text-3xl font-bold text-center mb-3">

                {candidate.name}

              </h2>

              {/* PARTY */}

              <p className="text-center text-xl mb-2 text-cyan-300">

                {candidate.party}

              </p>

              {/* SYMBOL */}

              <p className="text-center mb-4">

                Symbol:

                <span className="font-bold ml-2 text-yellow-300">

                  {candidate.symbol}

                </span>

              </p>

              {/* VOTES */}

              <p className="text-center text-lg mb-2">

                Votes:

                <span className="text-green-400 font-bold ml-2">

                  {candidate.votes}

                </span>

              </p>

              {/* PERCENT */}

              <p className="text-center text-lg mb-6">

                Percentage:

                <span className="text-pink-400 font-bold ml-2">

                  {

                    totalVotes > 0

                    ?

                    (

                      (
                        candidate.votes /
                        totalVotes
                      ) * 100

                    ).toFixed(1)

                    :

                    0

                  }%

                </span>

              </p>

              {/* BUTTON */}

              <button

                onClick={() =>
                  voteCandidate(candidate.id)
                }

                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl font-bold text-lg hover:scale-105 transition"

              >

                Vote Now

              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;