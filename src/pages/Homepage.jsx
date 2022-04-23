import "App.css";
import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import { videos } from "backend/db/videos";
import { Videocard } from "components/videolisting/Videocard";

function Homepage() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-wrap">
        <Sidebar />
        <div className="video-listing">
          {videos.map((video) => {
            return <Videocard video={video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
