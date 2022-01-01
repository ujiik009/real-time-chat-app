
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import PageNotFound from "./views/PageNotFound"
import LoginPage from "./views/LoginPage"
import SignUpPage from "./views/SignUpPage"
import MainChat from "./views/MainChat"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="messages" element={<MainChat />}/>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
