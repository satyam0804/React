import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ReRenderOptimise } from "./ReRenderOptimise";
import MemoUsed from "./memoUsed";

function App() {
  return (
    <>
      <ReRenderOptimise></ReRenderOptimise>
      <MemoUsed></MemoUsed>
    </>
  );
}

export default App;
