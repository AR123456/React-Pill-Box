import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
// import "bootswatch/dist/minty/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router className="App">
      <Header />
      <Container>
        <HomeScreen></HomeScreen>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
