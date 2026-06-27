import "./Webdetailpage.css";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductGallery from "../../components/ProductGallary/ProductGallery";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import SupplierCard from "../../components/SupplierCard/SupplierCard";
import ProductDescription from "../../components/Product Description/ProductDescription";
import YouMayLike from "../../components/YouMayLike/YouMayLike";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import DiscountBanner from "../../components/DiscountBanner/DiscountBanner";

function WebDetailPage() {
  return (
    <>
      <Breadcrumb />

      <div className="detail-container">
        <ProductGallery />
        <ProductInfo />
        <SupplierCard /> 
      </div>
      <div className="detail-bottom">
       <ProductDescription />
       <YouMayLike />
      </div>
      <RelatedProducts />
      <DiscountBanner />
    </>
  );
}

export default WebDetailPage;