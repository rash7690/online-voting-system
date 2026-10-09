function AnimatedBackground() {

  return (

    <div className="fixed inset-0 overflow-hidden -z-10">

      {/* MAIN BACKGROUND */}

      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-black"></div>

      {/* ANIMATED BLOBS */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-3xl animate-bounce"></div>

      {/* GRID EFFECT */}

      <div

        className="absolute inset-0 opacity-10"

        style={{

          backgroundImage:
            "linear-gradient(to right, #ffffff22 1px, transparent 1px), linear-gradient(to bottom, #ffffff22 1px, transparent 1px)",

          backgroundSize: "40px 40px"

        }}

      ></div>

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/40"></div>

    </div>
  );
}

export default AnimatedBackground;