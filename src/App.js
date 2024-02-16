import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PageNotFound from "./components/PageNotFound";
import "./App.css";
import Home from "./components/home/Home";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route exact index element={<Home />} />
            <Route path="/trailer/:ytTrailerId" element={<Trailer />} />
            <Route path="/reviews/:movieId" element={<Reviews />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
