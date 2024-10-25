import { useState, useEffect } from "react";
import HomePage from "./componets/homepage/HomePage";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";
import ResponsiveNav from "./componets/navbar/ResponsiveNav";
import BusinessPage from "./componets/Business/BusinessPage";
import Footer from "./componets/footer/Footer";
import Personal from "./componets/personal/Personal";
import CreditCard from "./componets/creditcard/CreditCard";
import Loans from "./componets/Loans/Loans";
import About from "./componets/about/About";
import ContatcUs from "./componets/Support/ContatcUs";
import LoginPage from "./componets/USER/LoginPage";
import Register from "./componets/USER/Register";
import Loading from "./componets/Loading/Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Scroll from "./componets/scrol/Scroll";

const AppLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Effect to listen for location changes
  useEffect(() => {
    const handleLoading = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 4000); // Adjust the delay as needed
    };

    handleLoading();
  }, [location.pathname]); // Only run when the pathname changes

  const noHeaderFooterRoutes = ["/login", "/register"];
  const showHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {showHeaderFooter && <ResponsiveNav />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/creditcard" element={<CreditCard />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<ContatcUs />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          {showHeaderFooter && <Footer />}
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
      <Scroll />
    </Router>
  );
}

export default App;
