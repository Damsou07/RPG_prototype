import { useGameStore } from "../store/gameStore";

export const GameOverScreen = () => {
  const { setScreen } = useGameStore();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-950 text-white">
      <h2 className="text-4xl mb-4">Game Over 💀</h2>
      <button
        className="px-6 py-3 bg-red-700 hover:bg-red-600 rounded"
        onClick={() => setScreen("START")}
      >
        Rejouer
      </button>
    </div>
  );
};
