import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./routers/Home";
import Banderas from "./routers/Banderas";
import BanderasDetails from "./components/BanderaDetails";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="banderas" element={<Banderas />}/>
          <Route path="banderas/:name" element={<BanderasDetails/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
