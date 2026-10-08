import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Elias from "./pages/Elias";
import Settings from "./pages/Settings";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>

      <nav>
       <button onClick={() => setPage("Home")}>
          Home
</button>
        <button onClick={() => setPage("todo")}>
          ✅ To-Do
        </button>

        <button onClick={() => setPage("elias")}>
          👨‍💻 Elias
        </button>

        <button onClick={() => setPage("settings")}>
          ⚙️ Settings
        </button>
      </nav>

      {page === "home" && <Home />}
      {page === "todo" && <Todo />}
      {page === "elias" && <Elias />}
      {page === "settings" && <Settings />}

    </div>
  );
}

export default App;