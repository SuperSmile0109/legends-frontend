import React from "react";
import { Provider } from 'react-redux';
import store from "./redux/store";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ComingSoon from "./pages/ComingSoon/ComingSoon";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/play" element={<ComingSoon />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
