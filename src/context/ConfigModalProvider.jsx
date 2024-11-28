import { createContext, useState } from "react";

export const ConfigModalContext = createContext();

const ConfigModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ConfigModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ConfigModalContext.Provider>
  );
};

export default ConfigModalProvider;
