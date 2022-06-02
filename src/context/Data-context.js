import { createContext, useReducer, useContext, useState } from "react";
import { likeReducer } from "reducer/like-reducer";
import { watchlaterReducer } from "reducer/watchLater-reducer";
import { historyReducer } from "reducer/history-reducer";
import { playlistReducer } from "reducer/playlist-reducer";

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
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    playlists: [],
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
        playlistState,
        playlistDispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
