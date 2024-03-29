import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
