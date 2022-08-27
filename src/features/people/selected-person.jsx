import { useState, createContext } from "react";

export const SelectedPersonContext = createContext();

export default function SelectedPersonProvider({ children }) {
  const [selectedPerson, setSelectedPerson] = useState(undefined);
  return (
    <SelectedPersonContext.Provider
      value={{
        selectedPerson,
        setSelectedPerson,
      }}>
      {children}
    </SelectedPersonContext.Provider>
  );
}
