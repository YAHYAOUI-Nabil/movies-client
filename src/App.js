import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PageNotFound from "./components/PageNotFound";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route exact index element={<Home />} />
            <Route path="/trailer/ytTrailerId" element={<PageNotFound />} />
            <Route path="/reviews/:movieId" element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
