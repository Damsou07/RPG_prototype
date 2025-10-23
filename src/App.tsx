import { useGameStore } from "./store/gameStore";
import { StartScreen } from "./screens/StartScreen";
import { GameScreen } from "./screens/GameScreen";
import { InventoryScreen } from "./screens/InventoryScreen";
import { GameOverScreen } from "./screens/GameOverScreen";

function App() {
  const { currentScreen } = useGameStore();

  switch (currentScreen) {
    case "START":
      return <StartScreen />;
    case "SELECT_STAGE":
      return <GameScreen />;
    case "INVENTORY":
      return <InventoryScreen />;
    case "GAME_OVER":
      return <GameOverScreen />;
    default:
      return <StartScreen />;
  }
}

export default App;
