
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


import LoginPage from "./views/LoginPage"
import SignUpPage from "./views/SignUpPage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage/>} />
        <Route path="signup" element={<SignUpPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
