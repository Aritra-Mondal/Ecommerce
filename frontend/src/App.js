import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
