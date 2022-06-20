import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <Router className="App">
      <Header />
      <Container>
        <h2>My Pill Box </h2>
      </Container>
    </Router>
  );
}

export default App;
