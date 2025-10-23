import React from "react";
import { useGameStore } from "../store/gameStore";
import "./GameMenu.css";

export const GameMenu: React.FC = () => {
  const { setScreen } = useGameStore();

  return (
    <nav className="game-menu">
      <button onClick={() => setScreen("INVENTORY")}>Inventaire</button>
      <button >Statistiques</button>
      <button >Compétences</button>
      <button onClick={() => setScreen("START")}>Quitter</button>
    </nav>
  );
};
