import "App.css";
import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import SingleVideo from "components/singlevideo/SingleVideo";
import { useParams } from "react-router-dom";

const SingleVideoPage = () => {
  const { videoId } = useParams();
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-wrap">
        <Sidebar />
        <SingleVideo id={videoId} />
      </div>
    </div>
  );
};

export default SingleVideoPage;
