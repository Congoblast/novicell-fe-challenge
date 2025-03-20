import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Frontpage } from "./pages/frontpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Frontpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
