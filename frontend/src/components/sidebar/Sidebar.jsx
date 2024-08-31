import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import axios from "axios";
export default function Sidebar() {
 
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">À propos</span>
      
        <p>
     Nous sommes diplômés des meilleures écoles françaises (Polytechnique, Ponts, Dauphine), avec des centaines d'heures de cours particuliers. Nous avons créé Mona pour répondre aux besoins des élèves avec les meilleurs professeurs à un prix imbattable. Notre mission : redonner confiance, développer l'autonomie et aider à progresser avec une méthode de travail rigoureuse et efficace.
        </p>
      </div>
  
     
    </div>
  );
}
