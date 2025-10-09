// src/App.tsx
import { Routes, Route, Navigate,BrowserRouter } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage.tsx";
import { MainNavbar } from "./layout/Navbar";

function App() {
  return (
      <BrowserRouter>
      <MainNavbar />
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<MenuPage />} />

          {/* catch-all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      </BrowserRouter>
  );
}

export default App;
