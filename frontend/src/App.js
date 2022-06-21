import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import MyPillBox from "./screens/MyPillBox";
// import "bootswatch/dist/minty/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router className="App">
      <Header />
      <Container>
        <HomeScreen></HomeScreen>
        {/* <Route path="/pillbox" component={MyPillBox} exact /> */}
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
