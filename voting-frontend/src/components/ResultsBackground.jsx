function ResultsBackground() {

  return (

    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950 to-black"></div>

      {/* TROPHY */}

      <img

        src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=1200&auto=format&fit=crop"

        alt="winner"

        className="absolute top-10 left-10 w-[350px] rounded-3xl opacity-20 animate-pulse"

      />

      {/* ANALYTICS */}

      <img

        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"

        alt="analytics"

        className="absolute bottom-10 right-10 w-[350px] rounded-3xl opacity-20 animate-bounce"

      />

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>

    </div>
  );
}

export default ResultsBackground;