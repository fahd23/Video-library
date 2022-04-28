import { createContext, useContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <DataContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
