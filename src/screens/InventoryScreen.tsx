import { useGameStore } from "../store/gameStore";

export const InventoryScreen = () => {
  const { setScreen } = useGameStore();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-2xl mb-4">Inventaire (vide pour l’instant)</h2>
      <button
        className="px-4 py-2 bg-indigo-700 hover:bg-indigo-600 rounded"
        onClick={() => setScreen("SELECT_STAGE")}
      >
        Retour
      </button>
    </div>
  );
};
