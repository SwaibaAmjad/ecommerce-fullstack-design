import { useState } from "react";
import "./ProductListingPage.css";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Sidebar from "../../components/SideBar/Sidebar";
import FilterBar from "../../components/FilterBar/FilterBar";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import ProductList from "../../components/ProductList/ProductList";
import DiscountBanner from "../../components/DiscountBanner/DiscountBanner";

function ProductListingPage() {
  const [view, setView] = useState("grid");

  return (
    <>
      <Breadcrumb />

      <div className="product-page">
        <Sidebar />

        <div className="product-content">
        <FilterBar view={view} setView={setView} />

          {view === "grid" ? (
            <ProductGrid />
          ) : (
            <ProductList />
          )}
        </div>
      </div>
       <DiscountBanner />
    </>
  );
}

export default ProductListingPage;