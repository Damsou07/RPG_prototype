import { useGameStore } from "../store/gameStore";

export const GameScreen = () => {
  const { setScreen } = useGameStore();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h2 className="text-3xl mb-4">Bienvenue dans l’aventure !</h2>
      <button
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
        onClick={() => setScreen("INVENTORY")}
      >
        Ouvrir l'inventaire
      </button>

      <button
        className="mt-3 px-4 py-2 bg-red-700 hover:bg-red-600 rounded"
        onClick={() => setScreen("GAME_OVER")}
      >
        Quitter
      </button>
    </div>
  );
};
