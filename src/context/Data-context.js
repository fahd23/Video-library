import { createContext, useReducer, useContext, useState } from "react";
import { likeReducer } from "reducer/like-reducer";
import { watchlaterReducer } from "reducer/watchLater-reducer";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [likeState, likeDispatch] = useReducer(likeReducer, {
    like: [],
  });
  const [watchlaterState, watchlaterDispatch] = useReducer(watchlaterReducer, {
    watchlater: [],
  });
  return (
    <DataContext.Provider
      value={{
        sidebar,
        setSidebar,
        likeState,
        likeDispatch,
        watchlaterState,
        watchlaterDispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
