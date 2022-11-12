import { Routes, Route } from "react-router-dom";
import {
  Historypage,
  Homepage,
  Likedpage,
  SingleVideoPage,
  Watchlater,
} from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/watchlater" element={<Watchlater />} />
        <Route path="/liked" element={<Likedpage />} />
        <Route path="/history" element={<Historypage />} />
        <Route path="/video/:videoId" element={<SingleVideoPage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
