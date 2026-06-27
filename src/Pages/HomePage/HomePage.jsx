
import Hero from "../../components/Hero/Hero";
import DealsOffers from "../../components/DealsOffers/DealsOffers";
import HomeOutdoor from "../../components/HomeOutdoor/HomeOutdoor";
import Gadgets from "../../components/Gadgets/Gadgets";
import SuplierInquiry from "../../components/SupplierInquiry/SuplierInquiry"
import SuggestedItems from "../../components/SuggestedItems/SuggestedItems"
import DiscountBanner from "../../components/DiscountBanner/DiscountBanner";
function Homepage() {
    return (
     <div className="homepage">
        <Hero />
        <DealsOffers />
        <HomeOutdoor />
        <Gadgets />
        <SuplierInquiry />
        <SuggestedItems />
        <DiscountBanner />
     </div>   
    );
}
export default Homepage;