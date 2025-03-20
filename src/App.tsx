import React from "react";
import "./App.css";
import { HeroBanner } from "./components/heroBanner/heroBanner";
import { ProductDataProvider } from "./providers/productDataProvider";

function App() {
  return (
    <div className="App">
      <ProductDataProvider>
        <HeroBanner />
      </ProductDataProvider>
    </div>
  );
}

export default App;
