import Body from "./components/Body/Body";

import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import './index.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Body/>
    </div>
  );
}

export default App;
