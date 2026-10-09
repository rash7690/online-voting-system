function LoginBackground() {

  return (

    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* MAIN BG */}

      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-cyan-950"></div>

      {/* CODING IMAGE */}

      <img

        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"

        alt="coding"

        className="absolute top-10 left-10 w-[350px] rounded-3xl opacity-20 animate-pulse"

      />

      {/* CYBER GLOW */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl animate-bounce"></div>

      {/* GRID */}

      <div

        className="absolute inset-0 opacity-10"

        style={{

          backgroundImage:
            "linear-gradient(to right,#ffffff22 1px,transparent 1px),linear-gradient(to bottom,#ffffff22 1px,transparent 1px)",

          backgroundSize: "40px 40px"

        }}

      ></div>

    </div>
  );
}

export default LoginBackground;