import "App.css";
import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";

function Homepage() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default Homepage;
