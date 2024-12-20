/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const GUIContext = createContext();

const GUIProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [maxGrade, setMaxGrade] = useState(5);
  const [wishedGrade, setWishedGrade] = useState(3);

  const [isAsideOpen, setAsideOpen] = useState(true);

  const modalState = {isModalOpen, setModalOpen, maxGrade, setMaxGrade, wishedGrade, setWishedGrade}
  const asideState = {isAsideOpen, setAsideOpen}

  return (
    <GUIContext.Provider
      value={{modalState, asideState}}
    >
      {children}
    </GUIContext.Provider>
  );
};

export default GUIProvider;
