import { useGameStore } from "../store/gameStore";

export const StartScreen = () => {
  const { setScreen } = useGameStore();

  return (
    <>
      <h1>La quête du Héro</h1>
      <button onClick={() => setScreen("GAME")}>Jouer</button>
    </>
  )
}