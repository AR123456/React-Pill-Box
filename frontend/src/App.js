import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import MyPillBox from "./screens/MyPillBox";
import MyMedList from "./screens/MyMedList";
import LoginScreen from "./screens/LoginScreen";
// import "bootswatch/dist/minty/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterScreen from "./screens/RegisterScreen";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header></Header>
              <HomeScreen></HomeScreen>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route exact path="/pillbox" element={<MyPillBox />}></Route>
        <Route exact path="/medlist" element={<MyMedList />}></Route>
        <Route exact path="/signup" element={<RegisterScreen />}></Route>
        <Route exact path="/signin" element={<LoginScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
