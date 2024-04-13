import React, { memo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Header = memo(function ({ title }) {
  return <div>{title}</div>;
});
function MemoUsed() {
  const [title, setTitle] = useState("My title is Hello World!!");
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Click me to update</button>
      <br />
      <br />
      <Header title={title}></Header>
      <br />
    </div>
  );
}
export default MemoUsed;
