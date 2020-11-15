import React, { useState, useEffect } from "react";

const CleanUp: React.FC = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const incrementNum = () => {
    console.log("Mouse event");
    setCurrentNum(preNumber => preNumber + 1);
  };
  useEffect(() => {
    console.log("useEffect in CleanUp");
    // Mouseのイベントを監視
    window.addEventListener("mousedown", incrementNum);
    // アンマウントした際に呼び出される
    return () => {
      console.log("cleanup");
      window.removeEventListener("mousedown", incrementNum);
    };
  }, []);
  return <div>{currentNum}</div>;
};

export default CleanUp;
