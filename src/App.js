import Header from "./components/Header";
import HotelView from "./components/HotelView";
import Sidebar from "./components/Sidebar";
import "./sass/main.scss";
function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <HotelView />
      </div>
    </div>
  );
}

export default App;
