import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
import { v4 as uuid } from "uuid";

const initState = {
  users: [
    { id: 1, name: "Peter" },
    { id: 2, name: "Bukky" },
    { id: 3, name: "Ndidi" },
    // { id: uuid(), name: "Ubani" },
  ],
};

export const AppContext = createContext(initState);

export const AppState = ({ childern }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  return (
    <AppContext.Provider value={"Hello"}> {childern} </AppContext.Provider>
  );
};
