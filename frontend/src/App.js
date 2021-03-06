import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart">
              <Route index element={<CartPage />} />
              <Route path=":id" element={<CartPage />} />
            </Route>
            {/* <Route path="/login" element={<LoginPage/>} /> */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
