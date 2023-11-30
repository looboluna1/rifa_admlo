import { useState } from "react";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { ProductsPage } from "../pages/ProductsPage";
import { DeleteProduct } from "../pages/DeleteProduct";
import { Route, Routes, Navigate } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
