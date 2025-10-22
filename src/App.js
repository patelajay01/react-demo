import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      {/* Header */}
      <header style={{ background: "#282c34", padding: "20px", color: "white" }}>
        <h1>🚀 My React Webpage narayan narayan</h1>
        <nav>
          <a href="#" style={{ color: "white", margin: "0 15px" }}>Home</a>
          <a href="#" style={{ color: "white", margin: "0 15px" }}>About</a>
          <a href="#" style={{ color: "white", margin: "0 15px" }}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ padding: "50px", background: "#f5f5f5" }}>
        <h2>Welcome to My Website</h2>
        <p>This is a simple webpage built with React.</p>
        <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer style={{ background: "#282c34", color: "white", padding: "10px", marginTop: "50px" }}>
        <p>© 2025 My React Website | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
