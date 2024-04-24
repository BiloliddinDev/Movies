import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Layouts from "./layouts";
import Detel from "./Pages/detels";
import Search from "./Pages/search";

function App() {
  return (
    <Layouts>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detel/:id" element={<Detel />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Layouts>
  );
}

export default App;
