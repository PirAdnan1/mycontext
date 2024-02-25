import React, { createContext, useState } from "react";

export const MyContext = createContext();


function MyContextProvider({ children }) {
const [data, setData] = useState(null);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyContextProvider;
