import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./screens/Main";
import Navbar from "./component/Navbar";
import View from "./screens/View";
import Edit from "./screens/Edit";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/view" element={<View />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
};

export default App;
