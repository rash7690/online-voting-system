import {

  useEffect,
  useState

} from "react";

import axios from "axios";

import Navbar
from "../components/Navbar";

import ResultsBackground
from "../components/ResultsBackground";

import {

  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer

} from "recharts";

function Results() {

  const [results, setResults] =
    useState([]);

  const [winner, setWinner] =
    useState(null);

  const [stats, setStats] =
    useState({});

  // FETCH RESULTS
  const fetchResults = async () => {

    try {

      const token =
        localStorage.getItem("token");

      // RESULTS
      const resultResponse =
        await axios.get(

          "http://localhost:8080/api/results",

          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      setResults(resultResponse.data);

      // WINNER
      const winnerResponse =
        await axios.get(

          "http://localhost:8080/api/results/winner",

          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      setWinner(winnerResponse.data);

      // STATS
      const statsResponse =
        await axios.get(

          "http://localhost:8080/api/results/stats",

          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      setStats(statsResponse.data);

    } catch (error) {

      console.log(error);

      alert("Failed to load results");
    }
  };

  useEffect(() => {

    fetchResults();

  }, []);

  const COLORS = [

    "#06b6d4",
    "#22c55e",
    "#ef4444",
    "#a855f7",
    "#f59e0b"

  ];

  return (

    <div className="min-h-screen text-white relative overflow-hidden">

      {/* BACKGROUND */}

      <ResultsBackground />

      {/* NAVBAR */}

      <Navbar />

      {/* CONTENT */}

      <div className="relative z-10 p-10">

        {/* HEADER */}

        <div className="mb-10">

          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">

            Election Results Dashboard

          </h1>

          <p className="text-gray-300 mt-4 text-lg">

            Real-Time Engineering Election Analytics

          </p>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">

          {/* TOTAL CANDIDATES */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">

            <h2 className="text-xl font-bold text-gray-300">

              Total Candidates

            </h2>

            <p className="text-5xl font-bold text-cyan-400 mt-5">

              {stats.totalCandidates}

            </p>

          </div>

          {/* TOTAL VOTES */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">

            <h2 className="text-xl font-bold text-gray-300">

              Total Votes

            </h2>

            <p className="text-5xl font-bold text-green-400 mt-5">

              {stats.totalVotes}

            </p>

          </div>

          {/* TOTAL USERS */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">

            <h2 className="text-xl font-bold text-gray-300">

              Total Users

            </h2>

            <p className="text-5xl font-bold text-purple-400 mt-5">

              {stats.totalUsers}

            </p>

          </div>

        </div>

        {/* WINNER */}

        {

          winner && (

            <div className="bg-yellow-400/10 backdrop-blur-xl border border-yellow-400/30 p-10 rounded-3xl shadow-2xl mb-14">

              <h1 className="text-5xl font-bold text-center text-yellow-300 mb-8">

                🏆 Election Winner

              </h1>

              <div className="text-center">

                {/* LOGO */}

                <img

                  src={winner.logo}

                  alt="winner"

                  className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-yellow-400 shadow-2xl mb-6"

                />

                {/* NAME */}

                <h2 className="text-4xl font-bold text-cyan-300">

                  {winner.name}

                </h2>

                {/* PARTY */}

                <p className="text-2xl mt-4">

                  Party:

                  <span className="font-bold ml-3 text-pink-300">

                    {winner.party}

                  </span>

                </p>

                {/* VOTES */}

                <p className="text-2xl mt-4">

                  Votes:

                  <span className="font-bold text-green-400 ml-3">

                    {winner.votes}

                  </span>

                </p>

              </div>

            </div>
          )
        }

        {/* CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* PIE CHART */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">

            <h2 className="text-3xl font-bold mb-8 text-cyan-300">

              Vote Distribution

            </h2>

            <ResponsiveContainer
              width="100%"
              height={400}
            >

              <PieChart>

                <Pie

                  data={results}

                  dataKey="votes"

                  nameKey="name"

                  outerRadius={140}

                  label

                >

                  {

                    results.map((entry, index) => (

                      <Cell

                        key={index}

                        fill={
                          COLORS[
                            index % COLORS.length
                          ]
                        }

                      />

                    ))
                  }

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

          {/* BAR CHART */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">

            <h2 className="text-3xl font-bold mb-8 text-green-300">

              Candidate Votes

            </h2>

            <ResponsiveContainer
              width="100%"
              height={400}
            >

              <BarChart data={results}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="votes"
                  fill="#06b6d4"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Results;