import "./App.css";

import Dooz from "../src/components/dooz";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dooz />} />
    </Routes>
  );
}

export default App;
