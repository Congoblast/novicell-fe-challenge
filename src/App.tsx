import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { FrontPage } from "./pages/front-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<FrontPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
