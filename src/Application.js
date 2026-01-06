import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import Footer from './components/Footer'
import Header from './components/Header'
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import { CartProvider } from "./context/CartContext";
import HomePagePanel from './pages/panel/PanelPage'
<<<<<<< Updated upstream

import HomePagePanel from './pages/panel/PanelPage'

=======
import Login from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import AboutUs from "./pages/AboutUs";
>>>>>>> Stashed changes

function Application() {
    return (
        <div>
            <CartProvider>
<<<<<<< Updated upstream
                <Header></Header>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/panel" element={<HomePagePanel />} />
                    <Route path="/terms" element={<FaqPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/panel" element={<HomePagePanel />} />
                </Routes>
                <Footer></Footer>
=======
                <AuthProvider>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/terms" element={<FaqPage />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route element={<PrivateRoute />}>
                            <Route path="/panel" element={<HomePagePanel />} />
                        
                        </Route>
                    </Routes>
                    <Footer></Footer>
                </AuthProvider>
>>>>>>> Stashed changes
            </CartProvider>
        </div>
    )
}

export default Application