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
        <div className="video-listing-header">
          <div className="category-items">
            <span className="chips chip-active">All</span>
            <span className="chips">World Cup</span>
            <span className="chips">IPL</span>
            <span className="chips">Others</span>
          </div>
          <div className="video-listing">
            {videos.map((video) => {
              return <Videocard video={video} key={video._id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
