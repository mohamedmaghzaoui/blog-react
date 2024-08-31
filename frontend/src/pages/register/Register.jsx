import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css"

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:8080/user/signup", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
    return (
      <div className="register">
      <span className="registerTitle">Inscription</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Nom d'utilisateur</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Entrez votre nom d'utilisateur."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Entrez votre email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Mot de passe</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Entrez votre mot de passe..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton ms-1" type="submit">
          Inscription
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="text-white" style={{textDecoration:"none"}} to="/login">
          Connexion
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
    )
}
