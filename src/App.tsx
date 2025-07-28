import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ProductsPage from "./components/ProductsPage";
import StorePage from "./components/StorePage";
import OffersPage from "./components/OffersPage";
import AccountPage from "./components/AccountPage";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="text-2xl">🐾 Loading...</div>
        </div>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
