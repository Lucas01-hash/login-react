import React, { useContext } from "react";
import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Private } from "./pages/Private";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { AuthContext } from "./contexts/Auth/AuthContext";

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const storageToken = localStorage.getItem("Peditz@token");
    if (storageToken) {
      localStorage.removeItem("Peditz@token");
      navigate('/')
      window.location.reload();
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Private</Link>
          {auth.user && (
            <Link to="/" onClick={handleLogout}>
              Sair
            </Link>
          )}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private></Private>
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
