import { Routes, Route } from "react-router-dom";
import { Homepage, SingleVideoPage } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/playlist" element={<Homepage />} />
        <Route path="/watchlater" element={<Homepage />} />
        <Route path="/liked" element={<Homepage />} />
        <Route path="/history" element={<Homepage />} />
        <Route path="/video/:videoId" element={<SingleVideoPage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
