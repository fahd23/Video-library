import { createContext, useContext, useState } from "react";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <VideoContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
