// components/MyComponent.js
import React, { useContext } from "react";
import { MyContext } from "@/context/Context";

const MyComponent = () => {
  const contextValue = useContext(MyContext);
  const { data, setData } = contextValue;

  return (
    <div>
      <p>Data from context: {data}</p>
      <button onClick={() => setData("New data")}>Update Data</button>
    </div>
  );
};

export default MyComponent;
