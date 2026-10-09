function AdminBackground() {

  return (

    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black"></div>

      {/* SERVER ROOM */}

      <img

        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"

        alt="server"

        className="absolute top-10 right-10 w-[400px] rounded-3xl opacity-20 animate-pulse"

      />

      {/* ENGINEERING */}

      <img

        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"

        alt="engineering"

        className="absolute bottom-10 left-10 w-[350px] rounded-3xl opacity-20 animate-bounce"

      />

      {/* GLOW */}

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>

    </div>
  );
}

export default AdminBackground;