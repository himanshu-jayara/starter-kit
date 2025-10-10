// src/App.tsx
import { Routes, Route, Navigate,BrowserRouter } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage.tsx";
import { MainNavbar } from "./layout/Navbar";
import Footer from "./layout/Footer.tsx";

function App() {
  return (
      <BrowserRouter>
      <MainNavbar />
      <main >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<MenuPage />} />
          <Route path="/about" element={<MenuPage />} />

          {/* catch-all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
