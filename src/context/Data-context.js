import { createContext, useReducer, useContext, useState } from "react";
import { likeReducer } from "reducer/like-reducer";
import { watchlaterReducer } from "reducer/watchLater-reducer";
import { historyReducer } from "reducer/history-reducer";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [likeState, likeDispatch] = useReducer(likeReducer, {
    like: [],
  });
  const [watchlaterState, watchlaterDispatch] = useReducer(watchlaterReducer, {
    watchlater: [],
  });
  const [historyState, historyDispatch] = useReducer(historyReducer, {
    history: [],
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
        historyState,
        historyDispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
