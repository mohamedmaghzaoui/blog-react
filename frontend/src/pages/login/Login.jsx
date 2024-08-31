import "./login.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function Login() {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const {dispatch,isFetching}=useContext(Context)
  const handleSubmit = async (e) => {
    e.preventDefault();
  dispatch({type:"LOGIN_START"})

    try {
      const res = await axios.post("http://localhost:8080/user/login", {
        email,
        password,
      })
      dispatch({type:"LOGIN_SUCCESS",payload:res.data.others})
     localStorage.setItem("blog-token",(res.data.token))
      navigate("/")
    } catch (err) {
      dispatch({type:"LOGIN_FAILED"})
    }
  };
 
  return (
    <div className="login">
      <span className="loginTitle">Connexion</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Entrez votre email..." onChange={(e) => setEmail(e.target.value)}/>
        <label>Mot de passe</label>
        <input className="loginInput" type="password" placeholder="Entrez votre mot de passe..."  onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" className="loginButton ms-1" disabled={isFetching}>Connexion</button>
      </form>
      <button className="loginRegisterButton mt-2   ">
        <Link className="link text-white " to="/register">
          Inscription
        </Link>
      </button>
    </div>
  );
}
