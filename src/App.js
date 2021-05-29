import "./App.css";
import Banner from "./components/banner/Banner";
import NavBar from "./components/navbar/NavBar";
import Rowpost from "./components/rowpost/Rowpost";
import { actions, originals } from "./urls";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rowpost url={originals} title="Netflix Originals" />
      <Rowpost url={actions} title="Action Movies" isSmall />
    </div>
  );
}

export default App;
