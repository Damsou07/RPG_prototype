import { useGameStore } from "../store/gameStore";
import "./styles/SelectStageScreen.css";
import { GameMenu } from "../components/GameMenu";

export const GameScreen = () => {
  const { setScreen } = useGameStore();

  return (
    <>
      <GameMenu />
      <h1 className="title">Chapitre 1</h1>
      <button
        className="button"
        onClick={() => setScreen("TARGET_1-1")}
      >
        Cible 1
      </button>

    
    </>
  );
};
