function RegisterBackground() {

  return (

    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-pink-950"></div>

      {/* STUDENTS */}

      <img

        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"

        alt="students"

        className="absolute top-16 right-10 w-[400px] rounded-3xl opacity-20 animate-bounce"

      />

      <img

        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"

        alt="team"

        className="absolute bottom-10 left-10 w-[350px] rounded-3xl opacity-20 animate-pulse"

      />

      {/* GLOW */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

    </div>
  );
}

export default RegisterBackground;