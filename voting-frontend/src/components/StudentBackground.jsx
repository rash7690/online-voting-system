function StudentBackground() {

  return (

    <div className="fixed inset-0 overflow-hidden -z-10">

      {/* MAIN BACKGROUND */}

      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-black"></div>

      {/* ENGINEERING STUDENT PHOTO 1 */}

      <img

        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"

        alt="students"

        className="absolute top-10 left-10 w-[320px] h-[220px] object-cover rounded-3xl opacity-20 shadow-2xl animate-pulse"

      />

      {/* ENGINEERING STUDENT PHOTO 2 */}

      <img

        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"

        alt="engineering"

        className="absolute bottom-10 right-10 w-[350px] h-[240px] object-cover rounded-3xl opacity-20 shadow-2xl animate-bounce"

      />

      {/* CODING PHOTO */}

      <img

        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"

        alt="coding"

        className="absolute top-[35%] left-[40%] w-[300px] h-[200px] object-cover rounded-3xl opacity-20 shadow-2xl animate-pulse"

      />

      {/* CYBER GLOW */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-3xl animate-bounce"></div>

      {/* GRID */}

      <div

        className="absolute inset-0 opacity-10"

        style={{

          backgroundImage:

            "linear-gradient(to right, #ffffff22 1px, transparent 1px), linear-gradient(to bottom, #ffffff22 1px, transparent 1px)",

          backgroundSize: "40px 40px"

        }}

      ></div>

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/40"></div>

    </div>
  );
}

export default StudentBackground;