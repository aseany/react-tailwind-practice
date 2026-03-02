import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Access from "./components/Access";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* 2. コンポーネントを配置する */}
      
        <Hero/>
        <Access/>
        
    </div>
  );
}
export default App;
