import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./routers/RouterHome";
import Banderas from "./routers/RouterBanderas";
import RouterBanderaDetails from "./routers/RouterBanderaDetails";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="banderas" element={<Banderas />}/>
          <Route path="banderas/:name" element={<RouterBanderaDetails/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
