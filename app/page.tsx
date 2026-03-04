"use client"

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        fontFamily: "Arial"
      }}
    >

      {/* NAVBAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "20px 60px",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(8px)",
          color: "white",
          zIndex: 1000
        }}
      >

        <div
          style={{
            fontSize: "26px",
            fontWeight: "900",
            letterSpacing: "4px"
          }}
        >
          BODYRIZE
        </div>

        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "60px",
            fontSize: "20px",
            fontWeight: "700",
            letterSpacing: "2px",
            textTransform: "uppercase"
          }}
        >

          <a
            href="/formules"
            style={{color:"white", textDecoration:"none"}}
            onMouseEnter={(e)=> e.currentTarget.style.color="#ff0000"}
            onMouseLeave={(e)=> e.currentTarget.style.color="white"}
          >
            Formules
          </a>

          <a
            href="/accessoires"
            style={{color:"white", textDecoration:"none"}}
            onMouseEnter={(e)=> e.currentTarget.style.color="#ff0000"}
            onMouseLeave={(e)=> e.currentTarget.style.color="white"}
          >
            Accessoires
          </a>

          <a
            href="/apropos"
            style={{color:"white", textDecoration:"none"}}
            onMouseEnter={(e)=> e.currentTarget.style.color="#ff0000"}
            onMouseLeave={(e)=> e.currentTarget.style.color="white"}
          >
            À propos
          </a>

          <a
            href="/contact"
            style={{color:"white", textDecoration:"none"}}
            onMouseEnter={(e)=> e.currentTarget.style.color="#ff0000"}
            onMouseLeave={(e)=> e.currentTarget.style.color="white"}
          >
            Contact
          </a>

        </div>

      </div>

      {/* overlay sombre */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)"
        }}
      />

      {/* contenu */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white"
        }}
      >

        <h1
          style={{
            fontSize: "clamp(60px,8vw,110px)",
            fontWeight: "900",
            letterSpacing: "6px",
            marginBottom: "10px",
            textShadow: "0 0 20px rgba(255,0,0,0.6)"
          }}
        >
          BODYRIZE
        </h1>

        <p
          style={{
            fontSize: "clamp(20px,2vw,32px)",
            letterSpacing: "3px",
            opacity: 0.9
          }}
        >
          TRANSFORME TON CORPS
        </p>

        {/* BOUTON */}
        <a href="/formules">
          <button
            style={{
              marginTop: "40px",
              padding: "18px 40px",
              fontSize: "20px",
              fontWeight: "700",
              background: "linear-gradient(90deg,#ff0000,#b30000)",
              border: "none",
              borderRadius: "10px",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 8px 25px rgba(255,0,0,0.6)"
            }}
          >
            Générer mon programme
          </button>
        </a>

      </div>

    </main>
  )
}