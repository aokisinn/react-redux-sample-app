import React, { useEffect, useState } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import CleanUp from "./CleanUp";
const App: React.FC = () => {
  const [status, setStatus] = useState<string | number>("text");
  const [input, setInput] = useState<string>("");
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(true);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // 第二引数を指定すると該当の変数が更新された時のみ
  // 第二引数が []の場合は一度のみ実行
  useEffect(() => {
    console.log("use Effect Test");
    document.title = "count" + counter;
  }, [counter]);
  return (
    <div className="App">
      <header className="App-header">
        <h4>{status}</h4>
        <button onClick={() => setStatus("on Click")}>Button</button>
        <h4>{input}</h4>
        <input type="text" value={input} onChange={onChangeHandler} />
        <h4>{counter}</h4>
        <button onClick={() => setCounter(preCounter => preCounter + 1)}>
          追加
        </button>
        {/* <CleanUp /> */}
        {display && <CleanUp />}
        <button onClick={() => setDisplay(!display)}>Toggle display</button>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};

export default App;
