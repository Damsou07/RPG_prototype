import { useGameStore } from "../store/gameStore";
import "./styles/StartScreen.css";

export const StartScreen = () => {
  const { setScreen } = useGameStore();

  return (
    <>
      <div className="screen-box">
        <h1 className="title">La quête du Héro</h1>
        <button className="button" onClick={() => setScreen("SELECT_STAGE")}>Jouer</button>
      </div>
    </>
  )
}