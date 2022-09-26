import { useState } from "react";
import "./App.css";
import Header from "./Header";
import HeroSection from './HeroSection'
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App font-[Poppins] p-4 min-h-screen">
      <Header />
      <HeroSection/>
    </div>
  );
}

export default App;
