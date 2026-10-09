function DashboardBackground() {

  return (

    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-black"></div>

      {/* AI / TECH */}

      <img

        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop"

        alt="ai"

        className="absolute top-20 left-10 w-[350px] rounded-3xl opacity-20 animate-pulse"

      />

      <img

        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"

        alt="coding"

        className="absolute bottom-10 right-10 w-[350px] rounded-3xl opacity-20 animate-bounce"

      />

      {/* GLOW */}

      <div className="absolute top-0 left-[40%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

    </div>
  );
}

export default DashboardBackground;